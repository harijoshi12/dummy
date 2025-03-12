// src/components/Sidebar.tsx
import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="p-4 font-semibold">Purchase</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">AR Aging Analysis</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Top 10 Debtors</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Days Sales Outstanding</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Onboarding tasks</li>
        </ul>
      </nav>
    </aside>
  );
}
