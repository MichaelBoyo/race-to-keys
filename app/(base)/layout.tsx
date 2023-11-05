import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { SideBar } from "@/components/SideBar";
import { NavBar } from "@/components/NavBar";
import RightBar from "@/components/RightBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body className={`${inter.className} h-screen  flex  justify-between`}>
        <SideBar />
        <div className=" flex flex-col justify-betweem  overflow-y-hidden h-screen bg-base-200  ">
          <NavBar />
          <div className="max-w-[70vw]  grow px-5  ">{children}</div>
        </div>
        <RightBar />
      </body>
    </html>
  );
}
