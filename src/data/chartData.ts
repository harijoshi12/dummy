export const arAgingChartData = {
  labels: ["10", "11", "12", "13", "14"],
  datasets: [
    {
      label: "Actual Amount",
      data: [1.5, 0.5, 2.0, 1.8, 1.6],
      backgroundColor: "#3B82F6",
    },
    {
      label: "Overdue",
      data: [0.5, 0.3, 1.0, 0.8, 0.6],
      backgroundColor: "#F59E0B",
    },
  ],
};

export const topDebtorsChartData = {
  labels: ["Debtor A", "Debtor B", "Debtor C", "Debtor D", "Debtor E"],
  datasets: [
    {
      label: "Feature",
      data: [250, 400, 350, 450, 300],
      backgroundColor: "#3B82F6",
    },
    {
      label: "Overdue",
      data: [100, 200, 150, 180, 120],
      backgroundColor: "#EF4444",
    },
  ],
};

export const dsoChartData = {
  labels: ["10", "11", "12", "13", "14"],
  datasets: [
    {
      label: "Actual DSO",
      data: [1.8, 1.6, 2.1, 1.9, 2.3],
      borderColor: "#F97316",
      backgroundColor: "rgba(249, 115, 22, 0.2)",
      borderWidth: 1,
    },
    {
      label: "Best Possible DSO",
      data: [1.5, 1.7, 2.0, 1.6, 1.9],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderWidth: 1,
    },
  ],
};
