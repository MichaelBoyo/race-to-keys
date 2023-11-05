import React from "react";

type Props = {
  value: number | string;
  header: string;
  children?: React.ReactNode;
  sub?: string;
  icon?: React.ReactNode;
};
const Stat = ({ value, header, children, sub, icon }: Props) => {
  return (
    <div className="stats border  text-accent">
      <div className="stat">
        <div className="stat-title text-ellipsis overflow-hidden max-w-max">
          {header}
        </div>
        <div className="stat-value relative flex gap-1 items-center   ">
          {icon}
          {value}
          <small className="font-light  right-0 text-sm">{sub}</small>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Stat;
