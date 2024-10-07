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
        backgroundColor: ["#0FB4C3", "#FFB969", "#EEEEEE"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // This creates a 90% cutout (doughnut effect)
  };

  return (
    <div className="bg-layoutColor py-2 px-2 rounded-lg border-2">
      <h3 className="font-semibold text-black">Tasks Overview</h3>
      <div className="w-60 mx-auto p-3">
        <Doughnut data={chartData} options={options} />
      </div>
      <div className="flex space-x-4 justify-center mt-2">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p className="text-black text-xs">In Progress</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p className="text-black text-xs">In Progress</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p className="text-black text-xs">In Progress</p>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
