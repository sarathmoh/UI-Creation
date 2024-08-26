import React from "react";
import Plus from "./assets/Plus.png";
import send from "./assets/send.png";
import recieve from "./assets/recieve.png";
import { TotalBalance } from "./Interface";

interface IncomeProps {
  totalBalance: TotalBalance;
}

const Income: React.FC<IncomeProps> = ({ totalBalance }) => {
  return (
    <div className="flex flex-col justify-between bg-[#00FF6B] w-full p-5 rounded-2xl h-full">
      <div className="flex justify-between items-center h-full">
        <div>
          <h1 className="text-3xl font-medium">Total Balance</h1>
          <div className="flex items-baseline">
            <div className="text-7xl">{totalBalance.amount}</div>
            <div className="font-semibold ml-2">{totalBalance.currency}</div>
          </div>
        </div>
        <div className="self-start">
          <img src={Plus} alt="Plus icon" />
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
        <button className="bg-white text-black w-[241px] h-[76px] rounded-full flex justify-center items-center">
          Deposit <img src={recieve} alt="Receive icon" className="ml-2" />
        </button>
        <button className="bg-black text-white w-[241px] h-[76px] rounded-full flex justify-center items-center">
          Send <img src={send} alt="Send icon" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Income;
