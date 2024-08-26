import Search from "./assets/searching.png";
import Bolt from "./assets/bolt.png";
import Notification from "./assets/bell.png";
import Avatar from "./assets/Avatar.png";
import LoadMore from "./assets/menu.png"
const Navbar = ({clickHandler}) => {
  return (
   
      <div className="flex justify-between bg-gray-50  h-18 rounded-full ">
        <div className=" mx-10 flex items-center gap-2">
          <img className="w-7 h-5 lg:2xl:hidden" src={LoadMore} onClick={clickHandler}/>
          <h1 className=" text-2xl font-bold ">Overview</h1>
        </div>
        <div className="flex m-3">
          <div className="flex mx-6 bg-[#F3F4F7] rounded-2xl">
            <img src={Search} className="mx-5 h-5 mt-3   " />
            <input
              className="bg-[#F3F4F7] rounded-2xl"
              type="text"
              placeholder="search"
            />
          </div>

          <span className="mx-3">
            <img src={Bolt} />
          </span>
          <span className="mx-3">
            <img src={Notification} />
          </span>

          <div className="flex">
            <div className="h-3 mx-2">
              <img src={Avatar} />
            </div>
            <div className="flex  flex-col ">
              <div className="flex">
                <div>
                  <h4 className="font-extralight">@William</h4>
                </div>
                <div className="bg-[#00FF6B] rounded-2xl w-10 text-center">
                  <h4>pro</h4>
                </div>
              </div>
              <div>
                <h3>Williams Blake</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
