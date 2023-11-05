import { getSession } from "@/lib/actions";
import Image from "next/image";
import { BuyAndSell } from "./BuyAndSell";

const RightBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  return (
    <div className="bg-base-100 max-w-[300px] min-w-[100px]">
      <div className="flex justify-between w-full  border-b h-[73px]  p-2">
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
      <BuyAndSell />
    </div>
  );
};

export default RightBar;
