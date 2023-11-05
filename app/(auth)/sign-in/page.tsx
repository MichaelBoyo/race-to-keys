import { TwitterSIgnIn } from "@/components/TwitterSIgnIn";
import { AppName, Logo } from "@/constants/app";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
export default async function Login() {
  const session = await getSession();
  if (session?.user) return redirect("/");
  return (
    <main className="w-screen flex py-20 flex-col  h-screen gap-2 items-center justify-between m-auto">
      <pre className="text-[40px] flex items-center gap-3">
        <Logo />
        {AppName}
      </pre>
      <div className="flex flex-col gap-3">
        <p>Sign in to Continue to {AppName}</p>
        <TwitterSIgnIn />
      </div>
      <p></p>
    </main>
  );
}
