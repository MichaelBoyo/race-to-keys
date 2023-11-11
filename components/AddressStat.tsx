import { getKeyBalance } from "@/lib/contract";
import React from "react";
import Stat from "./Stat";
import { FcKey } from "react-icons/fc";
type Props = {
  address: string;
  wallet_address: string;
};
const AddressStat = async ({ wallet_address, address }: Props) => {
  const bal = await getKeyBalance(wallet_address, address);

  return (
    <Stat
      icon={<FcKey className="p-1" />}
      sub="keys"
      value={`${bal} `}
      header={address}
    />
  );
};

export default AddressStat;
