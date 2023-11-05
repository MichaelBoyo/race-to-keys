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
import Stat from "@/components/Stat";

const Dash = async () => {
  const session = await getSession();
  if (!session || !session.user) return redirect("/sign-in");
  const kkeySubs = await getKeySubjects(session?.user);
  const tradeHist = await getTradeHistory();

  const wallerAddr = getWalletAddr(session?.user.privateKey);

  const ptr = await getProtocolFeePercentage();
  const sfe = await getSubjectFeePercentage();
  return (
    <div className="p-2 h-full  flex  flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-3xl">Fee Percentages</p>
        <div className="grid grid-cols-2 gap-5">
          <Stat header="Protocol's fee percentage" value={`% ${ptr}`} />
          <Stat header="Subject's fee percentage" value={`% ${sfe}`} />
        </div>
      </div>
      <div className="divider"></div>
      <KeysCollection
        wallet_address={wallerAddr}
        addresses={kkeySubs.map((k) => k.address)}
      />
    </div>
  );
};

export default Dash;
