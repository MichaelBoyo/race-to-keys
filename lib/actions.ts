import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import { User } from "./types";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getMe() {
  const session = await getServerSession(authOptions);

  return session
    ? {
        username: session.user.username,
        name: session.user.name,
        imgSrc: session.user.image.replace("_normal", ""),
        privateKey: session.user.privateKey,
      }
    : undefined;
}
