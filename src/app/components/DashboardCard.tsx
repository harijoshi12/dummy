// src/components/DashboardCard.tsx
import React from "react";

interface DashboardCardProps {
  title: string;
  amount: string;
  subTitle?: string;
  subAmount?: string;
}

export default function DashboardCard({
  title,
  amount,
  subTitle,
  subAmount,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col justify-between">
      <h3 className="text-gray-700 font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-2">{amount}</p>
      {subTitle && (
        <div className="mt-2 text-sm text-gray-500">
          {subTitle}: <span className="font-medium">{subAmount}</span>
        </div>
      )}
    </div>
  );
}
