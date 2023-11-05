"use client";

import { buyKeys, getKeyBalance, sellKeys } from "@/lib/contract";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import DropDown from "./DropDown";
import { useRouter } from "next/navigation";
import { FaCheckSquare } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { AptosApiError } from "aptos";
type Props = {
  keySubjects: {
    address: string;
    keys: number;
  }[];
  user: User;
  walletAddress: string;
};
export const BuyAndSellClient = ({
  keySubjects,
  user,
  walletAddress,
}: Props) => {
  const [amount, setAmount] = useState(10);
  const [address, setAddress] = useState(keySubjects[0].address);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [sellLoading, setSellLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "",
    icon: <FcCancel />,
  });
  const handleSubmit = async (buy?: boolean) => {
    try {
      const bal = await getKeyBalance(walletAddress, address);

      if (buy) {
        setLoading(true);
        await buyKeys(user, address, amount);
      } else {
        if (bal < amount) {
          setAlert({
            open: true,
            message: "Not enough keys",
            type: "alert-error",
            icon: <FcCancel />,
          });
          return;
        }
        setSellLoading(true);
        await sellKeys(user, address, amount);
      }

      router.refresh();
      setAlert({
        open: true,
        message: "Transaction successfull",
        type: "alert-succes",
        icon: <FaCheckSquare />,
      });
    } catch (error: any | AptosApiError) {
      setAlert({
        open: true,
        message: error?.message || "Something went wrong",
        type: "alert-error",
        icon: <FcCancel />,
      });
    } finally {
      setLoading(false);
      setSellLoading(false);
    }
  };
  useEffect(() => {
    if (!alert.open) return;
    const interval = setInterval(() => {
      setAlert({
        open: false,
        message: "",
        type: "",
        icon: <FcCancel />,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [alert.open]);

  return (
    <div className="  w-full ">
      <div className="divider">Buy and Sell Keys</div>
      <div className="flex flex-col gap-3 border rounded-lg p-2 ">
        {alert.open ? (
          <div className="absolute transition-all duration-300 flex p-5  w-screen justify-center items-center left-0 top-0 ">
            <div className={`${alert.type} alert w-max   `}>
              {alert.icon}
              <span>{alert.message}</span>
            </div>
          </div>
        ) : null}
        <div>
          <label className="mb-1">Enter amount</label>
          <input
            value={amount}
            onChange={(e) => {
              if (isNaN(Number(e.target.value))) return;
              setAmount(Number(e.target.value));
            }}
            type="text"
            placeholder="Enter amount"
            className="input input-bordered "
          />
        </div>
        <DropDown
          selected={address}
          setSelected={setAddress}
          items={keySubjects.map((address) => address.address)}
        />

        <div className="flex gap-4">
          <button onClick={() => handleSubmit(true)} className="btn btn-accent">
            Buy
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <p className="border gap-1 w-max  p-1 rounded-full bg-accent text-black font-semibold">
                <FaArrowTrendUp />
              </p>
            )}
          </button>

          <button onClick={() => handleSubmit()} className="btn btn-error ">
            Sell
            {sellLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <p className="border gap-1 w-max  p-1 rounded-full bg-error text-black font-semibold">
                <FaArrowTrendDown />
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
