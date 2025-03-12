// // src/app/dashboard/page.tsx
// "use client";

// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import DashboardCard from "../components/DashboardCard";
// import DealsTable from "../components/DealsTable";


// export default function DashboardPage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <main className="flex-1 p-4 md:p-6 lg:p-8">
//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <DashboardCard
//               title="AR Aging Analysis"
//               amount="77.1"
//               subTitle="By Due Date"
//               subAmount="Days"
//             />
//             <DashboardCard
//               title="Top 10 Debtors"
//               amount="343.2"
//               subTitle="By AR Amount"
//               subAmount="Receivable"
//             />
//             <DashboardCard
//               title="Days Sales Outstanding"
//               amount="269.0"
//               subTitle="Based on DSO"
//               subAmount="Printd"
//             />
//             <DashboardCard
//               title="Onboarding tasks"
//               amount="5"
//               subTitle="New tasks"
//               subAmount="In Progress"
//             />
//           </div>

//           {/* Additional row (Inbox, Onboarding, etc.) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             <div className="bg-white p-4 rounded-lg shadow-sm">
//               <h2 className="text-lg font-bold">My Inbox</h2>
//               <p className="text-gray-500 mt-2">No new messages</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-sm">
//               <h2 className="text-lg font-bold">Onboarding Tasks</h2>
//               <p className="text-gray-500 mt-2">All tasks completed</p>
//             </div>
//           </div>

//           {/* Deals Table */}
//           <DealsTable />
//         </main>
//       </div>
//     </div>
//   );
// }
// src/app/dashboard/page.tsx
"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

import { agingAnalysisData, topDebtorsData, dsoData } from "@/data/chartData";
import ChartComponent from "../components/ChartComponent";
import DealsTable from "../components/DealsTable";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Cards & Charts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <DashboardCard title="AR Aging Analysis" amount="77.1" />
            <DashboardCard title="Top 10 Debtors" amount="3.6B" />
            <DashboardCard title="Days Sales Outstanding" amount="269.0" />
            <DashboardCard title="Onboarding tasks" amount="5" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* AR Aging Analysis Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-2">AR Aging Analysis</h2>
              <ChartComponent
                data={agingAnalysisData}
                xKey="period"
                yKeys={["actual", "overdue"]}
                colors={["#1E40AF", "#F59E0B"]}
              />
            </div>

            {/* Top 10 Debtors Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-2">Top 10 Debtors</h2>
              <ChartComponent
                data={topDebtorsData}
                xKey="debtor"
                yKeys={["total", "overdue"]}
                colors={["#3B82F6", "#EF4444"]}
              />
            </div>

            {/* Days Sales Outstanding Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-2">Days Sales Outstanding</h2>
              <ChartComponent
                data={dsoData}
                xKey="period"
                yKeys={["actual", "best"]}
                colors={["#10B981", "#6366F1"]}
              />
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-2">Deals Details</h2>
            <DealsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
