import one from "./assets/s1.png";
import two from "./assets/s2.png";
import three from "./assets/s3.png";
import four from "./assets/s4.png";
import five from "./assets/s5.png";
import six from "./assets/s6.png";
import seven from "./assets/s7.png";
import eight from "./assets/s8.png";
const Sidebar = () => {
  return (
    <div className="row-end-3 row-start-1 flex justify-center items-stretch py-5 ">
      <div className=" bg-black w-[100px] rounded-full flex flex-col items-center justify-between py-5 ">
        <div className="">
          <img className="mb-20" src={one} />
          <div className="flex flex-col gap-5">
            <img src={two} />
            <img src={three} />
            <img src={four} />
            <img src={five} />
            <img src={six} />
            <img src={seven} />
          </div>
        </div>
        <div>
          <img src={eight} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
