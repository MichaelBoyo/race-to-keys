import { ContractTradeEvent } from "@/lib/types";
import { FaArrowTrendUp } from "react-icons/fa6";
const excludeList = ["new_supply", "creation_number"];
export const TransactionRow = ({
  trade,
  index,
}: {
  trade: ContractTradeEvent;
  index: number;
}) => {
  if (!trade) return null;
  return (
    <tr className="hover:bg-base-200">
      <td>{index + 1}</td>
      <td>{trade.version}</td>

      {Object.entries(trade.guid).map(([key, value]) => (
        <>
          {excludeList.includes(key) ? null : (
            <td key={key}>
              <p className="text-ellipsis overflow-hidden max-w-[100px]">
                {value}
              </p>
            </td>
          )}
        </>
      ))}
      {Object.entries(trade.data).map(([key, value]) => (
        <>
          {excludeList.includes(key) ? null : (
            <td key={key}>
              {typeof value === "boolean" ? (
                <>
                  {value ? (
                    <p className="border flex items-center gap-1 border-success w-max p-1 rounded-full bg-success text-black font-semibold">
                      Buy
                      <FaArrowTrendUp />
                    </p>
                  ) : (
                    "Sell"
                  )}
                </>
              ) : (
                <p className="text-ellipsis overflow-hidden max-w-[100px]">
                  {value}
                </p>
              )}
            </td>
          )}
        </>
      ))}
    </tr>
  );
};
