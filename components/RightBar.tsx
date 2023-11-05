import { getSession } from "@/lib/actions";
import Image from "next/image";
import { BuyAndSell } from "./BuyAndSell";
import { RecentTransactions } from "./RecentTransactions";
import { FavouriteKeys } from "./FavouriteKeys";
import { getKeySubjects } from "@/lib/contract";

const RightBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  const keySubs = await getKeySubjects();
  return (
    <div className="bg-base-100 max-w-[300px] min-w-[100px] flex flex-col justify-between">
      <div className="flex justify-between w-full  border-b h-[73px]  p-2">
        <p className="flex flex-col">
          Hello, <b>{user.name}</b>
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

      <RecentTransactions />

      <FavouriteKeys
        wallet_address={user.wallet_address}
        keySubs={keySubs.map((v) => v.address)}
      />
    </div>
  );
};

export default RightBar;
