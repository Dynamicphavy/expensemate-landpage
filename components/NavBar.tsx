import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full h-[4.375rem] flex justify-between items-center px-[15.625rem]">
      <h1 className="text-[0.875rem]">ExpenseMate</h1>
      <Link href="" className="w-[9.375rem] h-[1.875rem] text-[0.875rem] bg-[#161511] border border-[#3a3a3a] flex justify-center items-center hover:bg-[#2F6E52] transition-colors">Open in Telegram</Link>
    </nav>
  )
}

export default NavBar;