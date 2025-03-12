"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ChartComponent from "../components/ChartComponent";
import DealsTable from "../components/DealsTable";
import { arAgingChartData, topDebtorsChartData, dsoChartData } from "@/data/chartData";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
              subtitle="Overdue and Future Receivable"
              value="77.1"
              unit="%"
              description="Net Overdue for More Than Interval 1 Day"
              dropdownOptions={["By Due Date"]}
              chartData={arAgingChartData}
              legend={[{ color: "#3B82F6", label: "Actual Amount" }]}
            />

            <DashboardCard
              title="Top 10 Debtors"
              subtitle="Debt Profit by Due Period | USD"
              value="3.6"
              unit="B"
              description="Total Amount of All AR"
              dropdownOptions={["By All Accounts Receivable"]}
              chartData={topDebtorsChartData}
              legend={[
                { color: "#3B82F6", label: "Feature" },
                { color: "#F97316", label: "Overdue" },
              ]}
            />

            <DashboardCard
              title="Days Sales Outstanding"
              subtitle="DSO vs Best Possible DSO"
              value="269.0"
              description="Total Amount of AR"
              dropdownOptions={["By Period"]}
              chartData={dsoChartData}
              legend={[
                { color: "#F97316", label: "Actual DSO" },
                { color: "#3B82F6", label: "Best Possible DSO" },
              ]}
            />

            <DashboardCard
              title="Onboarding tasks"
              subtitle="by Priority"
              value="5"
              description=""
              dropdownOptions={["All"]}
            />
          </div>

       
          {/* Deals Table */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-2">Deals Details</h2>
            <DealsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
