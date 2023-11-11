"use client";
import { useState } from "react";
import { Pagination } from "./Pagination";
import AddressStat from "./AddressStat";

type Props = {
  addresses: string[];
  wallet_address: string;
};
const KeysCollection = ({ addresses, wallet_address }: Props) => {
  const [page, setPage] = useState(1);
  const size = 14;

  const totalPages = addresses.length / size;
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="font-semibold text-3xl">Your Key Collection </h1>
      <div className="grid grid-cols-6 gap-5 max-h-[50vh] custom-scrollbar overflow-auto">
        {addresses
          .slice((page - 1) * size, (page - 1) * size + size)
          .map((address, id) => {
            return (
              <AddressStat
                key={id}
                wallet_address={wallet_address}
                address={address}
              />
            );
          })}
      </div>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};

export default KeysCollection;
