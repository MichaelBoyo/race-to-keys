import { getSession } from "@/lib/actions";
import { getKeySubjects, getTradeHistory } from "@/lib/contract";
import { TransactionTable } from "@/components/TransactionTable";
import KeysCollection from "@/components/KeysCollection";
import { redirect } from "next/navigation";

const Dash = async () => {
  const session = await getSession();
  if (!session || !session.user) return redirect("/sign-in");
  const kkeySubs = await getKeySubjects(session?.user);
  const tradeHist = await getTradeHistory();

  return (
    <div className="p-2 h-full  flex  flex-col justify-between">
      <KeysCollection
        wallet_address={session?.user.wallet_address}
        addresses={kkeySubs.map((k) => k.address)}
      />
      <div className="divider"></div>
      <TransactionTable transactions={tradeHist} />
    </div>
  );
};

export default Dash;
