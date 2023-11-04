"use client";
import React from "react";
import { Modal } from "./Modal";
import Deposit from "./Deposit";
type Props = {
  balance: number;
};
const Stat = ({ balance }: Props) => {
  const handleDeposit = async () => {
    //@ts-ignore
    document.getElementById("deposit").showModal();
  };

  return (
    <div className="stats border  text-primary-content">
      <Modal id="deposit">
        <Deposit />
      </Modal>
      <div className="stat">
        <div className="stat-title">Current balance</div>
        <div className="stat-value">${balance}</div>
        <div className="stat-actions  flex gap-3">
          <button className="btn btn-sm btn-secondary">Withdrawal</button>
          <button className="btn btn-sm btn-success" onClick={handleDeposit}>
            deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stat;
