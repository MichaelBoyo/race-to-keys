"use client";
import { AppName, Logo } from "@/constants/app";
import { signIn } from "next-auth/react";
import { FiTwitter } from "react-icons/fi";
export default function Login() {
  return (
    <main className="w-screen flex py-20 flex-col  h-screen gap-2 items-center justify-between m-auto">
      <pre className="text-[40px] flex items-center gap-3">
        <Logo />
        {AppName}
      </pre>
      <div className="flex flex-col gap-3">
        <p>Sign in to Continue to {AppName}</p>
        <button
          className="btn btn-primary"
          onClick={() =>
            signIn("twitter", {
              callbackUrl: "/",
            })
          }
        >
          <FiTwitter /> Continue with Twitter
        </button>
      </div>
      <p></p>
    </main>
  );
}
