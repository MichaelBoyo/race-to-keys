"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export type IconProps = {
  name: string;
  path: string;
  icon: React.ReactNode;
};
export const SideBarItem = (item: IconProps) => {
  const pathName = usePathname();
  return (
    <Link
      key={item.name}
      href={item.path}
      className={`  ${
        pathName === item.path ? " border  active-border " : ""
      } text-base-900 hover:text-base-800 flex  gap-1 rounded-lg items-center p-1`}
    >
      {item.icon}
      {item.name}
    </Link>
  );
};
