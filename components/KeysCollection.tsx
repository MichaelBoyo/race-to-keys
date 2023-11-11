import { getKeyBalance } from "@/lib/contract";
import { FcKey } from "react-icons/fc";
import Stat from "./Stat";

type Props = {
  addresses: string[];
  wallet_address: string;
};
const KeysCollection = ({ addresses, wallet_address }: Props) => {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="font-semibold text-3xl">Your Key Collection </h1>
      <div className="grid grid-cols-6 gap-5 max-h-[50vh] custom-scrollbar overflow-auto">
        {addresses.map(async (address, id) => {
          const bal = await getKeyBalance(wallet_address, address);

          return (
            <Stat
              key={id}
              icon={<FcKey className="p-1" />}
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
