import IncomeStatusComponent from "./IncomeStatusComponent";
import { Income } from "./Interface";
interface IncomeProps {
  data: Income;
}

const IncomeProgress: React.FC<IncomeProps> = ({ data }) => {
  return (
    <div className="bg-white  w-[100%] h-[100%] rounded-lg">
      <IncomeStatusComponent
        id={data.id}
        icon={data?.icon}
        amount={data?.amount}
        percentage={data?.percentage}
      />
    </div>
  );
};

export default IncomeProgress;
