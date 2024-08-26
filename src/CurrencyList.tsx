import TEMP1 from "./assets/tablemenu1.png";
import TEMP2 from "./assets/tablemenu2.png";
import more from "./assets/table.png";
import icon1 from "./assets/apple.png";
import icon2 from "./assets/br2.png";
import icon3 from "./assets/brd3.png";
import icon4 from "./assets/brd4.png";
import "./currency.css";

const CurrencyList = ({ data }) => {
  const icons = {
    one: icon1,
    two: icon2,
    three: icon3,
    four: icon4,
  };

  const list = data.map((item) => {
    return (
      <tr key={item.id} className="font-medium h-[50px] ">
        <td className="flex gap-5">
          <img className="w-7" src={icons[item?.logo]} />
          {item?.name}
        </td>
        <td>${item?.amount}</td>
        <td>{item?.date}</td>

        <td>
          <p
            className={`${
              item?.status === "Paid"
                ? "bg-[#CCFFCD]"
                : item.status === "OverDue"
                ? "bg-[#FFEBDD]"
                : "bg-[#FEFACD]"
            } w-[40%] rounded-xl text-center `}
          >
            .{item.status}
          </p>
        </td>
        <td>
          <img className="w-7" src={more} />
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="flex justify-between p-3 bg-white rounded-t-2xl">
        <h1 className="text-2xl">Currencies Market</h1>
        <div className="flex">
          <span>
            <img className="w-8" src={TEMP1} />
          </span>
          <span>
            <img className="w-8" src={TEMP2} />
          </span>
        </div>
      </div>
      <div className="table-container bg-white rounded-b-2xl p-3 h-[100%]">
        <table className="h-[100%]">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    </>
  );
};

export default CurrencyList;
