import Link from "next/link";

type Props = {
  value: number | string;
  header: string;
};
const Stat = ({ value, header }: Props) => {
  return (
    <div className="stats border  text-primary-content">
      <div className="stat">
        <div className="stat-title text-ellipsis overflow-hidden max-w-[100px]">
          {header}
        </div>
        <div className="stat-value ">{value}</div>
      </div>
    </div>
  );
};

export default Stat;
