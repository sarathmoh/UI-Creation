import upward from "./assets/upward.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler 
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        data: [12, 18, 12, 19],
        borderColor: "black",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        fill: false,
        tension: 0.4, 
      },
      {
        data: [7, 10, 15, 13],
        borderColor: "#59E270",
        backgroundColor: "#CCFFCD",
        fill: true,
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Line Chart with Filled Area",
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold">Income</h3>
        <select className="bg-[#CCFFCD] rounded-2xl" id="exampleSelect">
          <option value="">Month</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="flex gap-1 text-[#00B771] rounded-xl bg-[#CCFFCD] w-24 ">
        <img src={upward} />
        <h1>+14.4%</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
