"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <main className="">
      {!session ? (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>
  );
}
