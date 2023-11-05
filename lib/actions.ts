import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import { User } from "./types";
import { AptosAccount, HexString } from "aptos";

export async function getSession() {
  return await getServerSession(authOptions);
}

export function getWalletAddr(privateKey: string) {
  const wallet = new AptosAccount(new HexString(privateKey).toUint8Array());
  return wallet.address().hex();
}
