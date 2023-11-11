import { getKeyBalance } from "@/lib/contract";
import Stat from "./Stat";
import { FcKey } from "react-icons/fc";

type Props = {
  addresses: string[];
  wallet_address: string;
};
const KeysCollection = async ({ addresses, wallet_address }: Props) => {
  return (
    <div className="flex flex-col gap-3 max-h-[50vh] custom-scroll-bar overflow-auto">
      <h1 className="font-semibold text-3xl">Your Key Collection </h1>
      <div className="grid grid-cols-6 gap-5">
        {addresses.map(async (address, id) => {
          const bal = await getKeyBalance(wallet_address, address);

          return (
            <Stat
              icon={<FcKey className="p-1" />}
              key={id}
              sub="keys"
              value={`${bal} `}
              header={address}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KeysCollection;
