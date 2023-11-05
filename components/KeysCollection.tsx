import { getBuyPrice, getKeyBalance } from "@/lib/contract";
import Stat from "./Stat";
import { FcKey } from "react-icons/fc";
type Props = {
  addresses: string[];
  wallet_address: string;
};
const KeysCollection = async ({ addresses, wallet_address }: Props) => {
  return (
    <div>
      <h1>Your Collections Collection</h1>
      <div>
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
