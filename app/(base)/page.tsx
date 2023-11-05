import { getSession, getWalletAddr } from "@/lib/actions";
import {
  getKeySubjects,
  getProtocolFeePercentage,
  getSubjectFeePercentage,
  getTradeHistory,
} from "@/lib/contract";
import { TransactionTable } from "@/components/TransactionTable";
import KeysCollection from "@/components/KeysCollection";
import { redirect } from "next/navigation";

const Dash = async () => {
  const session = await getSession();
  if (!session || !session.user) return redirect("/sign-in");
  const kkeySubs = await getKeySubjects(session?.user);
  const tradeHist = await getTradeHistory();

  const wallerAddr = getWalletAddr(session?.user.privateKey);

  const ptr = await getProtocolFeePercentage();
  const sfe = await getSubjectFeePercentage();
  return (
    <div className="p-2 h-full  flex  flex-col justify-between">
      pfe{ptr}
      sfe{sfe}
      <KeysCollection
        wallet_address={wallerAddr}
        addresses={kkeySubs.map((k) => k.address)}
      />
      <div className="divider"></div>
      <TransactionTable transactions={tradeHist} />
    </div>
  );
};

export default Dash;
