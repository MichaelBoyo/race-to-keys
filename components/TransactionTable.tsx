import { ContractTradeEvent } from "@/lib/types";
import { TransactionRow } from "./TransactionRow";
import { Suspense } from "react";
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
  if (!transactions) return null;
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="max-h-[80vh] max-w-[70vw] overflow-y-auto custom-scrollbar">
        <table className="table">
          <thead>
            <tr>
              {theads.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((trade, index) => (
              <TransactionRow index={index} key={index} trade={trade} />
            ))}
          </tbody>
        </table>
      </div>
    </Suspense>
  );
};
