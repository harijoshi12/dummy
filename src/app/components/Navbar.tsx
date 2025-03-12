"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDown, Search, Bell, User, Clock, Settings, Grid, Moon, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-[#333452] px-6 py-3 text-white">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="text-yellow-400 text-2xl font-bold">■</div>
          <span className="font-bold text-xl tracking-wide">GREGGS</span>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded-md w-80 text-gray-400">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-none focus:outline-none px-2 text-gray-300"
          />
          <span className="text-xs text-gray-400">Ctrl + K</span>
        </div>

        {/* Right - Icons & Profile */}
        <div className="flex items-center gap-4">
          <Clock className="h-6 w-6 cursor-pointer text-gray-300" />
          <Settings className="h-6 w-6 cursor-pointer text-gray-300" />
          <Grid className="h-6 w-6 cursor-pointer text-gray-300" />
          <Moon className="h-6 w-6 cursor-pointer text-gray-300" />
          <Bell className="h-6 w-6 cursor-pointer text-gray-300" />
          {/* User Profile */}
          <div className="h-8 w-8 rounded-full bg-gray-600 overflow-hidden">
            <User className="h-full w-full text-gray-300" />
          </div>
        </div>
      </nav>

      {/* Sub Navbar with Dropdowns */}
      <div className="bg-white shadow-sm border-b px-6 py-3 flex items-center text-gray-700 text-sm font-medium space-x-6">
        {/* Purchase - Highlighted */}
        <div className="flex items-center text-blue-600 font-bold text-lg border-b-4 border-blue-600 pb-1">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Purchase
        </div>

        {/* Dropdowns */}
        <Dropdown title="Home" items={["Dashboard", "Reports", "Activity"]} />
        <Dropdown title="Account" items={["Profile", "Settings", "Security"]} />
        <Dropdown title="Intern Master" items={["Interns List", "Assignments"]} />
        <Dropdown title="Opportunities" items={["Job Openings", "Applications"]} />
        <Dropdown title="Quotes" items={["Pending Quotes", "Approved Quotes"]} />
        <Dropdown title="Sale Orders" items={["New Orders", "Processed Orders"]} />
        <Dropdown title="Purchase Order" items={["Recent Orders", "Completed Orders"]} />
        <Dropdown title="Cases" items={["Open Cases", "Resolved Cases"]} />
        <Dropdown title="More" items={["Settings", "Help", "Contact Support"]} />
      </div>
    </div>
  );
}

/* Dropdown Component */
function Dropdown({ title, items }: { title: string; items: string[] }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center hover:text-blue-600 focus:outline-none">
        {title}
        <ChevronDown className="h-4 w-4 ml-1" />
      </Menu.Button>
      <Menu.Items className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md border z-50">
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <button
                className={`block w-full text-left px-4 py-2 ${
                  active ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`}
              >
                {item}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
