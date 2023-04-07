import React from "react";
import Link from "next/link";
import { Button } from "antd";

function Navbar() {
  return (
    <div className="bg-white w-[100%] z-10 fixed top-0 shadow-2xl">
      <div className="container mx-auto flex justify-between item-center  py-4">
        <div className="text-[24px] font-bold">Portfolio</div>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-[#9867C5] font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#9867C5] font-semibold">
            About
          </Link>
          <Link href="/projects" className="hover:text-[#9867C5] font-semibold">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#9867C5] font-semibold">
            Contact
          </Link>
        </div>
        <button className="hover:text-[#9867C5] text-[15px] border-2 border-indigo-500/100 rounded px-2">
          Dowload CV
        </button>
      </div>
    </div>
  );
}
export default Navbar;
