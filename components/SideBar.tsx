import { getSession } from "@/lib/actions";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import { Logout } from "./Logout";
export const SideBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  return (
    <div className="bg-base-100 p-2 flex flex-col justify-between min-w-[200px]">
      <pre className="text-3xl">Havit Labs</pre>
      <div id="end" className="flex gap-5 border-t items-center  p-3">
        <Image
          className="rounded-full"
          width={50}
          height={50}
          src={user.image}
          alt="user img"
        />
        <div className="flex gap-2">
          <p className="flex flex-col">
            {user.name} <b>{user.username}</b>
          </p>

          <Logout />
        </div>
      </div>
    </div>
  );
};
