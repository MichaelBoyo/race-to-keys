import { ContractTradeEvent } from "@/lib/types";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
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
            <td className="text-center " key={key}>
              {typeof value === "boolean" ? (
                <>
                  <div className="flex w-full items-center gap-2 justify-center ">
                    <pre>{value ? "Buy" : "Sell"}</pre>
                    {value ? (
                      <p className="border gap-1 w-max  p-1 rounded-full bg-accent text-black font-semibold">
                        <FaArrowTrendUp />
                      </p>
                    ) : (
                      <p className="border gap-1 w-max  p-1 rounded-full bg-error text-black font-semibold">
                        <FaArrowTrendDown />
                      </p>
                    )}
                  </div>
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
