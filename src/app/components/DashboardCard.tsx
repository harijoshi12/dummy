// src/app/components/DashboardCard.tsx
"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import ChartComponent from "./ChartComponent";
import type { ChartData } from "chart.js";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  value: string;
  unit?: string;
  description: string;
  dropdownOptions: string[];
  chartData?: ChartData<"bar">; // instead of `any`
  legend?: { color: string; label: string }[];
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  value,
  unit,
  description,
  dropdownOptions,
  chartData,
  legend,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-xs">
      {/* Title & Actions */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <MoreHorizontal className="text-gray-500 cursor-pointer" />
      </div>

      {/* Value */}
      <div className="mt-2">
        <span className="text-3xl font-bold">{value}</span>
        {unit && <span className="text-xl text-gray-500 ml-1">{unit}</span>}
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      {/* Dropdown */}
      <select className="mt-2 w-full border rounded-md p-1 text-sm text-gray-600">
        {dropdownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Chart */}
      {chartData && (
        <div className="mt-4">
          <ChartComponent data={chartData} />
        </div>
      )}

      {/* Legend */}
      {legend && (
        <div className="mt-3 flex space-x-4 text-xs">
          {legend.map((item, index) => (
            <div key={index} className="flex items-center space-x-1">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
