// src/app/components/MainNavbar.tsx
"use client";

import React from "react";
import { Search } from "lucide-react";
import { FaCog } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { CiDark } from "react-icons/ci";

export default function MainNavbar() {
  return (
    <nav className="flex items-center justify-between bg-[#333452] px-4 md:px-6 py-3 text-white w-full">
      {/* Left - Toggle Icon & Logo */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2 h-2 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400"></div>
          </div>
          <span className="text-[#4a90e2] text-xl md:text-2xl">GREGGS</span>
        </div>
      </div>

      {/* Center - Search Bar (Responsive) */}
      <div className="hidden md:flex items-center bg-[#474864] px-3 py-1 rounded-lg w-60 sm:w-72 md:w-60 lg:w-[30rem] text-gray-400 shadow-md">
        <Search className="h-5 w-5 text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border-none focus:outline-none px-2 text-white placeholder-gray-400"
        />
        <span className="text-xs text-white whitespace-nowrap ml-2">
          Ctrl + K
        </span>
      </div>

      {/* Right - Icons & Profile */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* "New" - Hidden on Mobile */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-white">
          <CgAdd className="w-5 h-5 text-gray-300" />
          <span className="text-sm text-gray-300">New</span>
        </div>

        {/* Vertical Separator (only on larger screens) */}
        <div className="hidden sm:block h-5 w-[1px] bg-gray-500"></div>

        {/* Icons */}
        <FaCog className="hidden sm:block w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
        <TbGridDots className="hidden sm:block w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
        <CiDark className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white" />

        {/* User Profile */}
        <div className="h-8 w-8 rounded-full border-2 border-gray-400 overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIW41SN7iIx8_Yc6mt8BpSxcUXt_ZZqe_8A&s"
            alt="User"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
