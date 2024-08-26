import { useEffect, useState } from "react";
import axios from "axios";
import Income from "./Income";
import IncomeProgress from "./IncomeProgress";
import CurrencyList from "./CurrencyList";
import QuickTransfer from "./QuickTransfer";
import CurrencyMarket from "./CurrencyMarket";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import YourCard from "./YourCard";
import { DashboardItem } from "./Interface";

const Content = () => {
  const [jsonData, setJsonData] = useState<DashboardItem | null>(null);
  const fetchData = () => {
    return axios
      .get("http://localhost:3000/dashboard")
      .then((response) => response.data[0]);
  };
  useEffect(() => {
    fetchData().then((result) => {
      setJsonData(result);
    });
  }, []);

  if (!jsonData) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-12 grid-rows-[1.5fr_1.3fr_2.3fr] h-lvh gap-5 max-sm:h-auto max-sm:grid-rows-1 ">
      <div className="col-start-1 col-end-13 row-start-1 row-end-2 grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:grid-rows-3">
        <div className="h-[100%]">
          <Income totalBalance={jsonData?.totalBalance} />
        </div>

        <div className="bg-white rounded-xl p-6  ">
          <LineChart />
        </div>
        <div>
          <YourCard data={jsonData?.yourCards} />
        </div>
      </div>
      <div className="col-start-1 col-end-9 gap-5 row-start-2 row-end-3 grid grid-cols-3 max-sm:col-end-13 max-sm:grid-cols-1 max-sm:grid-rows-3">
        <div>
          {" "}
          <IncomeProgress data={jsonData?.income[0]} />
        </div>
        <div>
          {" "}
          <IncomeProgress data={jsonData?.income[1]} />
        </div>
        <div>
          {" "}
          <CurrencyMarket list={jsonData?.currenciesMarket} />
        </div>
      </div>
      <div className="col-start-9 col-end-13  row-start-2 row-end-4  grid grid-rows-[1fr_1fr] grid-cols-1 gap-5 max-sm:col-start-1 max-sm:row-auto">
        <div>
          <QuickTransfer quick={jsonData?.quickTransfer} />
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div className="col-start-1  col-end-9   row-start-3 row-end-4 max-sm:col-end-13 max-sm:row-auto">
        <CurrencyList data={jsonData?.currencyList} />
      </div>
    </div>
  );
};

export default Content;
