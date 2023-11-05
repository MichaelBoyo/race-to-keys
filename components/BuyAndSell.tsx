import { getSession } from "@/lib/actions";
import { getAptosBalance, getKeySubjects } from "@/lib/contract";
import { BuyAndSellClient } from "./BuyAndSellClient";

export const BuyAndSell = async () => {
  const session = await getSession();
  if (!session || !session.user) return null;
  const keySubjects = await getKeySubjects(session?.user);
  return <BuyAndSellClient user={session?.user} keySubjects={keySubjects} />;
};
