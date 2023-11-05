import { getSession, getWalletAddr } from "@/lib/actions";
import Image from "next/image";
import { RecentTransactions } from "./RecentTransactions";
import { FavouriteKeys } from "./FavouriteKeys";
import { getKeySubjects } from "@/lib/contract";
import { BuyAndSellClient } from "./BuyAndSellClient";

const RightBar = async () => {
  const session = await getSession();
  if (!session?.user) return null;

  const { user } = session;
  const keySubs = await getKeySubjects();

  const walletAddress = getWalletAddr(user.privateKey);
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

      <BuyAndSellClient
        walletAddress={walletAddress}
        user={user}
        keySubjects={keySubs}
      />

      <RecentTransactions />

      <FavouriteKeys
        wallet_address={walletAddress}
        keySubs={keySubs.map((v) => v.address)}
      />
    </div>
  );
};

export default RightBar;
