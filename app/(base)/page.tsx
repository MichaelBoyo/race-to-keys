import Stat from "@/components/Stat";
import { getSession } from "@/lib/actions";
import {
  getAptosBalance,
  getKeyBalance,
  getKeySubjects,
  getOwnedCollections,
  getTradeHistory,
} from "@/lib/contract";
import { Deposit } from "@/components/Deposit";
import { TransactionTable } from "@/components/TransactionTable";
import KeysCollection from "@/components/KeysCollection";

const Dash = async () => {
  const session = await getSession();
  if (!session || !session.user) return <div>loading...</div>;
  const balance = await getAptosBalance(session?.user.wallet_address);
  const kkeySubs = await getKeySubjects(session?.user);
  const tradeHist = await getTradeHistory();

  // const userCollections = await getOwnedCollections(session?.user);
  // console.log("user collr", userCollections);

  return (
    <div>
      <Stat header=" Current  balance" value={`$ ${balance}`} />

      <Deposit user={session?.user!} addresses={kkeySubs} />
      <KeysCollection
        wallet_address={session?.user.wallet_address}
        addresses={kkeySubs.map((k) => k.address)}
      />
      <TransactionTable transactions={tradeHist} />
    </div>
  );
};

export default Dash;
