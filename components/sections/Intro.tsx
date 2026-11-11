import React from 'react';
import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full h-[31.25rem] flex justify-between items-center">
      <div className="w-[25rem] h-[31.25rem] flex flex-col gap-[0.938rem]">
        <h2 className="text-[3.125rem] font-fraunces font-bold">Track money the way you already talk about it</h2>
        <p className="text-[0.938rem] font-poppins">No app to download, no spreadsheet to maintain. Just message a bot the way you'd text a friend -- <br /> ExpenseMate logs it and keeps your balance one command away.</p>
        <Link href="https://web.telegram.org/a/#8709992201" className="w-[12.5rem] h-[3.125rem] bg-[#2f6e52] rounded-[0.625rem] font-poppins flex justify-center items-center hover:bg-[#0f5737] transition-colors">Start on telegram →</Link>
      </div>
      <div className="w-[25rem] h-[18.75rem] bg-[#12251c] p-3 flex flex-col gap-[0.625rem] rounded-[0.625rem] text-white">
        <div className="flex justify-between">
          <p className="font-mono text-sm text-[#646d65]">expensemate_bot</p>
          <p className="font-mono text-sm text-[#646d65]">chat</p>
        </div>
        <p className="font-mono text-sm text-gray-600">--------------------------------------------</p>
        <p className="font-mono text-sm text-[#ad9a63]">/expense 1500 food</p>
        <p className="font-mono text-sm text-[#bfbfb6]">✅ Expense recorded <br /> Amount: N1,500 · Category: Food</p>
        <p className="font-mono text-sm text-[#ad9a63]">/income 20000 allowance</p>
        <p className="font-mono text-sm text-[#bfbfb6]">✅ Income recorded</p>
        <p className="font-mono text-sm text-gray-600">--------------------------------------------</p>
        <p className="font-mono text-sm text-[#ad9a63]">/balance</p>
        <div className="flex justify-between">
          <p className="font-mono text-sm">Total balance</p>
          <p className="font-mono text-sm">N18,500</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;