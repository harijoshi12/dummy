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
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartComponentProps {
  data: any;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  return (
    <div className="h-48">
      <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default ChartComponent;
