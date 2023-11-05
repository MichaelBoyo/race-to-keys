import { getSession } from "@/lib/actions";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { AiOutlineBell } from "react-icons/ai";
import { Search } from "./Search";
import { getAptosBalance } from "@/lib/contract";
export const NavBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  const balance = await getAptosBalance(user.wallet_address);
  return (
    <div className="bg-base-100 p-3  border-l border-b  items-center border-r h-[73px]  flex justify-between w-full">
      <p></p>
      <Search />
      <div className="flex items-center gap-3">
        <div className="border rounded-lg p-2">
          <small>Balance:</small>
          <p className="text-accent text-md font-semibold">$ {balance}</p>
        </div>
        <AiOutlineBell className="w-8 h-8 p-1 rounded-full border" />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
