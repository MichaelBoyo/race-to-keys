"use client";
import { signIn } from "next-auth/react";
import { FiTwitter } from "react-icons/fi";

export const TwitterSIgnIn = () => {
  return (
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
  );
};
