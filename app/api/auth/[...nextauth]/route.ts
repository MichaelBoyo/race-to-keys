import NextAuth, { AuthOptions } from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const authOptions: AuthOptions = {
  providers: [
    Twitter({
      clientId: process.env.TWITTER_CONSUMER_KEY || "",
      clientSecret: process.env.TWITTER_CONSUMER_SECRET || "",
      version: "2.0",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
