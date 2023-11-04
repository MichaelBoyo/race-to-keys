import { buyKeys } from "@/lib/contract";
import { getSession } from "@/lib/actions";

const Deposit = async () => {
  const session = await getSession();

  //   const [amount, setAmount] = useState(10);

  if (!session) return null;
  const handleDeposit = async (e: any) => {
    e.preventDefault();
    const res = await buyKeys(session?.user!, session?.user.privateKey, 10);

    console.log("res", res);
  };
  return (
    <div>
      <form onSubmit={handleDeposit}>
        <input
          //   value={amount}
          //   onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          placeholder="Enter amount"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-sm btn-success">deposit</button>
      </form>
    </div>
  );
};

export default Deposit;
