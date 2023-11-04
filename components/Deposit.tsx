"use client";

import { useState } from "react";
import { User } from "@/lib/types";
import { buyKeys } from "@/lib/contract";
import { useRouter } from "next/navigation";
type Props = {
  addresses: {
    address: string;
    keys: number;
  }[];
  user: User;
};
export const Deposit = ({ addresses, user }: Props) => {
  const [amount, setAmount] = useState(10);
  const [address, setAddress] = useState(addresses[0].address);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log({ amount, address });
    const res = await buyKeys(user, address, amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <select
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="select w-full max-w-xs"
      >
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        {addresses.map((address) => (
          <option key={address.address}>{address.address}</option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">
        Buy keys
      </button>
    </form>
  );
};
