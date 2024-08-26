import recipient from "./assets/recipient.png";
import england from "./assets/england.png";
import send from "./assets/sends.png";
import { QuickTransfers } from "./Interface";

interface OuickTransferProps {
  quick: QuickTransfers[];
}
const QuickTransfer: React.FC<OuickTransferProps> = ({ quick }) => {
  return (
    <div className=" flex flex-col justify-between bg-[#ffffff] w-[100%] p-5 rounded-2xl">
      <div className="bg-white flex justify-between mb-3  ">
        <h1 className="text-2xl">Quick Transfer</h1>
        <p className="text-blue-500">View all</p>
      </div>
      <div className="bg-white flex justify-around mb-3">
        {quick.map((user) => (
          <div className="bg-[#FFEBDD] w-20 h-32 rounded-full text-center">
            <img
              className="h-16 w-16 ml-2 mt-2 "
              src={"assets/images/" + user.name + ".png"}
            />
            <small>{user.name}</small>
          </div>
        ))}
        <div className="w-20 h-32">
          <img src={recipient} />
        </div>
      </div>

      <div className="relative mx-1 mb-3 ">
        <input
          type="text"
          className="h-16 pl-16 pr-16 w-full rounded-full bg-[#F3F4F7]"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={england} alt="currency symbol" className="w-12 h-12" />
          <h3 className="ml-2 text-3xl">$2750</h3>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img src={send} alt="send icon" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
