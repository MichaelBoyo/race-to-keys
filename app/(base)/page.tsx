import Stat from "@/components/Stat";
import { getSession } from "@/lib/actions";
import {
  getAptosBalance,
  getKeyBalance,
  getKeySubjects,
  getOwnedCollections,
  getTradeHistory,
} from "@/lib/contract";
import { TransactionTable } from "@/components/TransactionTable";
import KeysCollection from "@/components/KeysCollection";
import Login from "../(auth)/sign-in/page";

const Dash = async () => {
  const session = await getSession();
  if (!session || !session.user) return <Login />;
  const kkeySubs = await getKeySubjects(session?.user);
  const tradeHist = await getTradeHistory();

  return (
    <div className="p-2 h-full flex   flex-col justify-between">
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
