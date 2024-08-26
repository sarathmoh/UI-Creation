import visa from "./assets/visa.png";
import add from "./assets/Plus (2).png";
import { YourCards } from "./Interface";
interface CardProps {
  data:YourCards;
}

const YourCard: React.FC<CardProps> = ({ data }) => {
  const cardsItem = data?.cards?.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`${(index + 1) % 2 === 0 ? "bg-[#F3F4F7]" : "bg-black"}   ${
          (index + 1) % 2 === 0 ? "text-black" : "text-white"
        }  w-[300px] h-[180px] flex flex-col flex-shrink-0 justify-between p-5 rounded-2xl `}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">${item?.balance}</h2>
          <img className="h-5" src={visa} />
        </div>

        <div className="flex justify-between">
          <h2>**** {item?.lastDigits}</h2>
          <h2>{item.expiry}</h2>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex flex-col  bg-white p-6 rounded-2xl justify-stretch h-[100%]">
        <div className="flex justify-between grow-0">
          <div>
            <h2 className="text-2xl font-bold">Your Cards</h2>
            <div className="bg-[#DAE1FE] w-20 text-center mt-1 rounded-xl">
              Premium
            </div>
          </div>
          <div>
            <img className="h-12" src={add} />
          </div>
        </div>
        <div className="grow bg-white  flex gap-3 overflow-x-hidden items-center">
          {cardsItem}
        </div>
      </div>
    </>
  );
};

export default YourCard;
