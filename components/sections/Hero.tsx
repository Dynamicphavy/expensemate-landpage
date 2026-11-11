import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-[15.625rem]">
      <div className="w-full h-[31.25rem] flex justify-between items-center">
        <div className="w-[25rem] h-[31.25rem] flex flex-col gap-[0.938rem]">
          <h1 className="text-[3.125rem] font-fraunces font-bold">Track money the way you already talk about it</h1>
          <p className="text-[0.938rem] text-[]">No app to download, no spreadsheet to maintain. Just message a bot the way you'd text a friend -- <br /> ExpenseMate logs it and keeps your balance one command away.</p>
          <Link href="" className="w-[12.5rem] h-[3.125rem] bg-[#2f6e52] rounded-[0.625rem] flex justify-center items-center hover:bg-[#0f5737] transition-colors">Start on telegram →</Link>
        </div>
        <div className="w-[25rem] h-[25rem] bg-[#12251c] p-3 flex flex-col rounded-[0.625rem] text-white">
          <div className="flex justify-between">
            <p>expensemate_bot</p>
            <p>chat</p>
          </div>
          <p>----------------------------------------------------------------------</p>
          <p>/expense 1500 food</p>
          <p>Expense recorded <br /> Amount: N1,500 · Category: Food</p>
          <p>/income 20000 allowance</p>
          <p>Income recorded</p>
          <p>----------------------------------------------------------------------</p>
          <p>/balance</p>
          <div className="flex justify-between">
            <p>Total balance</p>
            <p>N18,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
