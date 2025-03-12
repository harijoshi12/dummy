"use client";

import React, { FC, ReactNode, useState } from "react";
import { Search } from "lucide-react";
import { FaSalesforce } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

// Define Sidebar Item Props
interface SidebarItemProps {
  icon: ReactNode;
  text: string;
}

// Full List of Sidebar Items
const sidebarItems: SidebarItemProps[] = [
  { icon: <FaSalesforce className="text-blue-500" />, text: "Salesforce billing" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Sale force CPQ" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Sale billing configuration" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Salesforce CPQ Admin" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Advanced Approvals" },
  { icon: <MdManageAccounts className="text-gray-700" />, text: "Order management" },
  { icon: <IoAnalytics className="text-green-600" />, text: "Analytics studio" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Salesforce billing" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Sale force CPQ" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Sale billing configuration" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Salesforce CPQ Admin" },
  { icon: <FaSalesforce className="text-blue-500" />, text: "Advanced Approvals" },
  { icon: <MdManageAccounts className="text-gray-700" />, text: "Order management" },
];

const Sidebar: FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-200 p-4 shadow-md">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-gray-100 text-gray-400 rounded-md focus:outline-none"
          disabled
        />
      </div>

      {/* Apps Section */}
      <div className="text-gray-900 font-semibold text-sm mb-3">APPS</div>
      <nav>
        <ul className="space-y-3">
          {sidebarItems.slice(0, showAll ? sidebarItems.length : 7).map((item, index) => (
            <SidebarItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ul>
      </nav>

      {/* View All Button (Appears Only If More Than 7 Items Exist) */}
      {sidebarItems.length > 7 && (
        <div
          className="mt-2 text-blue-500 cursor-pointer font-semibold hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </div>
      )}
    </aside>
  );
};

// Sidebar Item Component
const SidebarItem: FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 rounded-md">
      {icon}
      <span className="text-sm">{text}</span>
    </li>
  );
};

export default Sidebar;
