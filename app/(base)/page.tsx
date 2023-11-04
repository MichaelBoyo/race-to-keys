import Stat from "@/components/Stat";
import { getSession } from "@/lib/actions";
import { getAptosBalance, getKeySubjects } from "@/lib/contract";
const Dash = async () => {
  const session = await getSession();
  console.log("session", { session });
  const balance = await getAptosBalance(session?.user.wallet_address);
  console.log("balance", balance);

  const kkeySubs = await getKeySubjects(session?.user);
  return (
    <div>
      {JSON.stringify(kkeySubs)}
      <Stat balance={balance} />
    </div>
  );
};

export default Dash;
