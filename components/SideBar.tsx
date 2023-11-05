import { getSession } from "@/lib/actions";
import Image from "next/image";
import { Logout } from "./Logout";
import { sideBarItems } from "@/constants/sidebrites";
import { SideBarItem } from "./SideBatItem";
export const SideBar = async () => {
  const session = await getSession();

  if (!session?.user) return null;

  const { user } = session;

  return (
    <div className="bg-base-100 p-2 flex flex-col justify-between min-w-[200px]">
      <div>
        <pre className="text-3xl">Havit Labs</pre>

        <div>
          {sideBarItems.map((item, idx) => (
            <SideBarItem {...item} key={idx} />
          ))}
        </div>
      </div>
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
            {user.name} <b>@{user.username}</b>
          </p>

          <Logout />
        </div>
      </div>
    </div>
  );
};
