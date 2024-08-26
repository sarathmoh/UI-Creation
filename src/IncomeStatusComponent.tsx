import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import icon1 from "./assets/incicon.png";
import icon2 from "./assets/incicon2.png";
import { Income } from "./Interface";


const IncomeStatusComponent = ({ icon, amount, percentage,id }: Income) => {
  const icons = {
    one: icon1,
    two: icon2,
  };
  return (
    <div  key={id} className="flex justify-between p-3">
      <div className="flex flex-col justify-between space-y-4 p-2">
        <img className="w-12" src={icons[icon]} alt="Income Icon" />
        <h1 className="font-bold text-3xl">Income</h1>
        <div className="text-6xl">${amount}</div>
      </div>
      <div className="">
        <CircularProgressbar
          className="w-28 "
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={15}
          styles={buildStyles({
            pathColor: `${percentage === 75 ? "#00FF6B" : "#FF6756"}`,
            trailColor: "#F3F4F7",
          })}
        />
      </div>
    </div>
  );
};

export default IncomeStatusComponent;
