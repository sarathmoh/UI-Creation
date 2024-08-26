import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      label: "",
      data: [6, 3, 4, 2, 4.5],
      backgroundColor: [
        "#00FF6B", 
        "#00FF6B", 
        "#000000", 
        "#00FF6B", 
        "#00FF6B", 
      ],
      borderRadius: 10, 
      borderSkipped: false, 
      barThickness: 20, 
    },
  ],
};

const options = {
  scales: {
    x: {
      display: false, 
      grid: {
        drawBorder: false,
        display: false, 
      },
    },
    y: {
      display: false, 
      grid: {
        drawBorder: false,
        display: false, 
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: false, 
    },
  },
  layout: {
    padding: 0,
  },
  elements: {
    bar: {
      borderSkipped: false, 
    },
  },
};

function BarChart() {
  return (
    <div className="bg-white  p-5 rounded-xl">
      <div className="flex justify-between">
        <h3 className="text-2xl">Expenses</h3>
        <select className="bg-[#CCFFCD] rounded-2xl" id="exampleSelect">
          <option value="">Week</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
