"use client";

import { buyKeys, sellKeys } from "@/lib/contract";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import DropDown from "./DropDown";
import { useRouter } from "next/navigation";
import { FaCheckSquare } from "react-icons/fa";
type Props = {
  keySubjects: {
    address: string;
    keys: number;
  }[];
  user: User;
};
export const BuyAndSellClient = ({ keySubjects, user }: Props) => {
  const [amount, setAmount] = useState(10);
  const [address, setAddress] = useState(keySubjects[0].address);
  const router = useRouter();

  const [alert, setAlert] = useState({
    open: false,
    message: "",
  });
  const handleSubmit = async (buy?: boolean) => {
    if (buy) {
      await buyKeys(user, address, amount);
    } else {
      await sellKeys(user, address, amount);
    }
    router.refresh();
    setAlert({
      open: true,
      message: "Transaction successfull",
    });
  };
  useEffect(() => {
    if (!alert.open) return;
    const interval = setInterval(() => {
      setAlert({
        open: false,
        message: "",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [alert.open]);

  return (
    <div className="  flex flex-col  ">
      {alert.open ? (
        <div className="absolute transition-all duration-300 flex p-5  w-screen justify-center items-center left-0 top-0 ">
          <div className="alert w-max alert-success  ">
            <FaCheckSquare />
            <span>{alert.message}</span>
          </div>
        </div>
      ) : null}
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="text"
        placeholder="Type here"
        className="input input-bordered "
      />
      <DropDown
        selected={address}
        setSelected={setAddress}
        items={keySubjects.map((address) => address.address)}
      />

      <div className="flex gap-4">
        <button onClick={() => handleSubmit(true)} className="btn btn-accent">
          Buy
          {/* <p className="border gap-1 w-max  p-1 rounded-full bg-accent text-black font-semibold">
            <FaArrowTrendUp />
          </p> */}
        </button>

        <button onClick={() => handleSubmit()} className="btn btn-error">
          Sell
          <p className="border gap-1 w-max  p-1 rounded-full bg-error text-black font-semibold">
            <FaArrowTrendDown />
          </p>
        </button>
      </div>
    </div>
  );
};
