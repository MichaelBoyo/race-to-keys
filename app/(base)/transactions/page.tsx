import { TransactionTable } from "@/components/TransactionTable";
import { getSession } from "@/lib/actions";
import { getTradeHistory } from "@/lib/contract";
import { redirect } from "next/navigation";

const Transactios = async () => {
  const session = await getSession();
  if (!session || !session.user) return redirect("/sign-in");
  const tradeHist = await getTradeHistory();
  return <TransactionTable transactions={tradeHist} />;
};

export default Transactios;
