"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setOpen((pre) => !pre)}
      >
        <div
          className={`w-6 h-1 bg-blue-400 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-400 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-400 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/">首页</Link>
          <Link href="/">首页</Link>
          <Link href="/">首页</Link>
          <Link href="/">首页</Link>
          <Link href="/">首页</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
