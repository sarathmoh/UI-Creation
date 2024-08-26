import Flag1 from "./assets/us.png";
import Down from "./assets/downs.png";
import UP from "./assets/ups.png";
import Flag2 from "./assets/flag2.png";
import { CurrencyMarkets } from "./Interface";
import React from "react";
interface CurrencyMarketProps {
  list: CurrencyMarkets[];
}

const CurrencyMarket: React.FC<CurrencyMarketProps> = ({ list }) => {
  const symbols = {
    one: Flag1,
    two: Flag2,
  };

  const marketList = list?.map((item: CurrencyMarkets) => {
    return (
      <div key={item?.id} className="flex justify-between w-[100%]">
        <div className="flex gap-2 ">
          <div>
            <img className="w-[50px]" src={symbols[item.flag]} />
          </div>
          <div>
            <p className="text-3xl">{item?.currency}</p>
            <p className="text-xl font-light">{item?.value}</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-3xl">{item?.currentValue}</p>
          </div>
          <div className="flex">
            <img src={`${item?.positive ? UP : Down}`} />

            <p
              className={`${
                item?.positive ? "text-green-400" : "text-red-500 "
              } text-xl font-light`}
            >
              {item?.positive ? "+" : "-"}
              {item?.percentage}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" bg-white w-[100%] rounded-xl h-[100%] ">
      <div className="p-6 flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-semibold">Currencies Market</h1>
        </div>
        <div className="flex flex-col gap-2">{marketList}</div>
      </div>
    </div>
  );
};

export default CurrencyMarket;
