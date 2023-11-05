"use client";
import { ContractTradeEvent } from "@/lib/types";
import { TransactionRow } from "./TransactionRow";
import { Pagination } from "./Pagination";
import { useState } from "react";
const theads = [
  "-",
  "Version",

  "Receiver ",
  "Transaction Type",
  "Key Amount",

  "protocol fee in APT",
  "protocol amount in APT",
  "Key Subject Addr",
  "Key Subject Fee in APT",
  "Sender",
];
export const TransactionTable = ({
  transactions,
}: {
  transactions: ContractTradeEvent[];
}) => {
  const [page, setPage] = useState(1);
  if (!transactions) return null;
  const size = 10;

  const totalPages = transactions.length / size;
  return (
    <div className="h-full  flex flex-col justify-between ">
      <p className="font-semibold text-3xl ">Transactions</p>

      <div className=" max-h-[45vh]  max-w-[70vw] overflow-y-auto custom-scrollbar">
        <table className="table">
          <thead>
            <tr>
              {theads.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions
              .slice((page - 1) * size, (page - 1) * size + size)
              .map((trade, index) => (
                <TransactionRow index={index} key={index} trade={trade} />
              ))}
          </tbody>
        </table>
      </div>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};
