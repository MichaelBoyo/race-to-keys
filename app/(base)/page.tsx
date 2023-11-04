import Stat from "@/components/Stat";
import { getSession } from "@/lib/actions";
import {
  getAptosBalance,
  getKeyBalance,
  getKeySubjects,
  getTradeHistory,
} from "@/lib/contract";
import { Deposit } from "@/components/Deposit";
import { TransactionRow } from "@/components/TransactionRow";
import { TransactionTable } from "@/components/TransactionTable";

const Dash = async () => {
  const session = await getSession();
  if (!session || !session.user) return <div>loading...</div>;
  const balance = await getAptosBalance(session?.user.wallet_address);
  const kkeySubs = await getKeySubjects(session?.user);
  const tradeHist = await getTradeHistory();
  return (
    <div>
      <Stat header=" Current  balance" balance={balance} />
      <Stat header=" Current  balance" balance={balance} />
      <Deposit user={session?.user!} addresses={kkeySubs} />
      <TransactionTable transactions={tradeHist} />
    </div>
  );
};

export default Dash;
