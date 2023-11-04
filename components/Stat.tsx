import Link from "next/link";

type Props = {
  balance: number;
  header: string;
};
const Stat = ({ balance, header }: Props) => {
  return (
    <div className="stats border  text-primary-content">
      <div className="stat">
        <div className="stat-title">{header}</div>
        <div className="stat-value">${balance}</div>
      </div>
    </div>
  );
};

export default Stat;
