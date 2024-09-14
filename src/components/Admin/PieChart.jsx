import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const chartData = {
    labels: ["In Progress", "Pending", "On Hold"],
    datasets: [
      {
        label: "Task Overview",
        data: data,
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
}

export default PieChart;
