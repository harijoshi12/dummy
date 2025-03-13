// src/app/components/ChartComponent.tsx
"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Use ChartData<"bar"> for bar charts specifically
interface ChartComponentProps {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, options }) => {
  return (
    <div className="h-48">
      <Bar
        data={data}
        options={options || { responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
};

export default ChartComponent;
