import { getSession } from "@/lib/actions";
import Image from "next/image";

const RightBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  return (
    <div className="bg-base-100 min-w-[100px]">
      <div id="end" className="flex gap-20  border-b h-[73px]  p-2">
        <p className="flex flex-col">
          Hello, <b>{user.username}</b>
        </p>
        <Image
          className="rounded-lg"
          width={50}
          height={50}
          src={user.image}
          alt="user img"
        />
      </div>
    </div>
  );
};

export default RightBar;
