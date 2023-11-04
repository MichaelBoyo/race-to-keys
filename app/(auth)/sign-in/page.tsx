"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="">
      <button
        onClick={() =>
          signIn("twitter", {
            callbackUrl: "/",
          })
        }
      >
        Sign in
      </button>
    </main>
  );
}
