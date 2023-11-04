import { getKeyBalance } from "@/lib/contract";
import Stat from "./Stat";
type Props = {
  addresses: string[];
  wallet_address: string;
};
const KeysCollection = async ({ addresses, wallet_address }: Props) => {
  return (
    <div>
      <h1>Keys Collection</h1>
      <div>
        {addresses.map(async (address, id) => {
          const bal = await getKeyBalance(wallet_address, address);
          return <Stat key={id} value={bal} header={address} />;
        })}
      </div>
    </div>
  );
};

export default KeysCollection;
