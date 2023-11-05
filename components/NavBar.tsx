import { getSession } from "@/lib/actions";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { AiOutlineBell } from "react-icons/ai";
export const NavBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  return (
    <div className="bg-base-100 p-3  items-center border-r min-h-[72px]  flex justify-between w-full">
      <p></p>
      <div className="flex items-center">
        <AiOutlineBell className="w-8 h-8 p-1 rounded-full border" />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
