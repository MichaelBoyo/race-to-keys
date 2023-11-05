"use client";
import { TbLogout } from "react-icons/tb";
import { signOut } from "next-auth/react";
export const Logout = () => {
  return (
    <button onClick={() => signOut()}>
      <TbLogout className="h-8 w-8" />
    </button>
  );
};
