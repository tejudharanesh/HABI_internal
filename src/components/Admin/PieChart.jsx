import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip);

function PieChart({ data }) {
  const chartData = {
    labels: ["In Progress", "Pending", "On Hold"],
    datasets: [
      {
        label: "Task Overview",
        data: data,
        backgroundColor: ["#0FB4C3", "#FFB400", "#EEEEEE"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // This creates a 90% cutout (doughnut effect)
  };

  return <Doughnut data={chartData} options={options} />;
}

export default PieChart;
