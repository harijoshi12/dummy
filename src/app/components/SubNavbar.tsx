// src/app/components/SubNavbar.tsx
"use client";

import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { TbGridDots } from "react-icons/tb";

export default function SubNavbar() {
  return (
    <div className="bg-white shadow-sm  px-6 py-3 flex items-center text-gray-700 text-sm font-medium space-x-6">
      {/* Grid Icon (as in Fig 1) */}
      <div className="flex items-center text-gray-700 cursor-pointer hover:text-blue-600">
        {/* <Grid className="h-5 w-5" /> */}
        <TbGridDots className="hidden sm:block w-6 h-6 text-black cursor-pointer hover:text-black mx-1" />
      </div>

      {/* Purchase - Highlighted */}
      <div className="flex items-center text-blue-600 font-bold text-lg pb-1 cursor-pointer">
        <span>Purchase</span>
      </div>
      <div className="flex items-center space-x-1 text-sm text-gray-600 ml-22 font-bold">
        {/* Dropdowns */}
        <Dropdown title="Home" items={["Dashboard", "Reports", "Activity"]} />
        <Dropdown title="Account" items={["Profile", "Settings", "Security"]} />
        <Dropdown
          title="Intern Master"
          items={["Interns List", "Assignments"]}
        />
        <Dropdown
          title="Opportunities"
          items={["Job Openings", "Applications"]}
        />
        <Dropdown
          title="Quotes"
          items={["Pending Quotes", "Approved Quotes"]}
        />
        <Dropdown
          title="Sale Orders"
          items={["New Orders", "Processed Orders"]}
        />
        <Dropdown
          title="Purchase Order"
          items={["Recent Orders", "Completed Orders"]}
        />
        <Dropdown title="Cases" items={["Open Cases", "Resolved Cases"]} />
        <Dropdown
          title="More"
          items={["Settings", "Help", "Contact Support"]}
        />
      </div>
    </div>
  );
}

/* Dropdown Component */
function Dropdown({ title, items }: { title: string; items: string[] }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center hover:text-blue-600 focus:outline-none px-2">
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
                }`}>
                {item}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
