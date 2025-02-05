import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AptosAccount } from "aptos";
import { NextAuthOptions, getServerSession } from "next-auth";
import TwitterProvider, { TwitterProfile } from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
      version: "2.0",
      profile(profile: TwitterProfile) {
        const wallet = new AptosAccount();
        const privateKey = wallet.toPrivateKeyObject().privateKeyHex;

        return {
          id: profile.data.id,
          username: profile.data.username,
          name: profile.data.name ?? "",
          image: profile.data.profile_image_url ?? "",
          privateKey,
          publicKey: "",
        };
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      return {
        ...session,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
          image: user.image,
          privateKey: user.privateKey,
        },
      };
    },
  },
  events: {
    async signIn({ account }) {
      try {
        if (account) {
          const foundAccount = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: "twitter",
                providerAccountId: account.providerAccountId,
              },
            },
          });

          if (foundAccount) {
            await prisma.account.update({
              where: {
                provider_providerAccountId: {
                  provider: "twitter",
                  providerAccountId: account.providerAccountId,
                },
              },
              data: {
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
              },
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
