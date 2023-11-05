import { getKeyBalance } from "@/lib/contract";
import { FcKey } from "react-icons/fc";
type Props = {
  keySubs: string[];
  wallet_address: string;
};
export const FavouriteKeys = ({ keySubs, wallet_address }: Props) => {
  return (
    <div>
      <div className="divider">Favoutite Keys</div>
      <div className="flex flex-col gap-3 px-1">
        {keySubs.map(async (address, id) => {
          const bal = await getKeyBalance(wallet_address, address);
          if (bal < 2) return null;
          return (
            <div className="border shadow-xl rounded-lg p-2" key={id}>
              <p className="text-ellipsis overflow-hidden max-w-max">
                {address}
              </p>
              <div className="flex text-lg font-semibold items-center ">
                <FcKey />
                <p>{bal}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
