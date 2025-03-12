// src/app/dashboard/page.tsx
"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import DealsTable from "../components/DealsTable";


export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <DashboardCard
              title="AR Aging Analysis"
              amount="77.1"
              subTitle="By Due Date"
              subAmount="Days"
            />
            <DashboardCard
              title="Top 10 Debtors"
              amount="343.2"
              subTitle="By AR Amount"
              subAmount="Receivable"
            />
            <DashboardCard
              title="Days Sales Outstanding"
              amount="269.0"
              subTitle="Based on DSO"
              subAmount="Printd"
            />
            <DashboardCard
              title="Onboarding tasks"
              amount="5"
              subTitle="New tasks"
              subAmount="In Progress"
            />
          </div>

          {/* Additional row (Inbox, Onboarding, etc.) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold">My Inbox</h2>
              <p className="text-gray-500 mt-2">No new messages</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold">Onboarding Tasks</h2>
              <p className="text-gray-500 mt-2">All tasks completed</p>
            </div>
          </div>

          {/* Deals Table */}
          <DealsTable />
        </main>
      </div>
    </div>
  );
}
