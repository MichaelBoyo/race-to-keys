"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { json } from "stream/consumers";

export default function Login() {
  const { data: session } = useSession();

  return (
    <main className="">
      {JSON.stringify(session)}
      {!session ? (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              signIn("twitter", {
                callbackUrl: "/",
              })
            }
          >
            Sign in
          </button>
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
