import { getSession } from "@/lib/actions";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { AiOutlineBell } from "react-icons/ai";
import { Search } from "./Search";
export const NavBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  return (
    <div className="bg-base-100 p-3  border-l border-b  items-center border-r h-[73px]  flex justify-between w-full">
      <p></p>
      <Search />
      <div className="flex items-center">
        <AiOutlineBell className="w-8 h-8 p-1 rounded-full border" />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
