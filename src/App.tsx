import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useState } from "react";
function App() {
  const [visible, setVisible] = useState(false);
  const clickHandler = () => {
    setVisible(!visible);
  };
  return (
    <div className="grid  grid-cols-12 grid-rows-[100px_auto] ">
      <div
        className={`col-start-2 col-end-13 row-start-1 row-end-2 pt-5 px-3 ${
          visible ? "max-lg:col-start-2" : "max-lg:col-start-1"
        }`}
      >
        <Navbar clickHandler={clickHandler} />
      </div>

      <div
        className={`row-end-3 row-start-1 flex justify-center items-stretch py-5 ${
          visible ? null : "max-lg:hidden"
        } max-lg:col-start-1 max-lg:col-end-2`}
      >
        <Sidebar />
      </div>

      <div
        className={`col-start-2 col-end-13 row-start-2 row-end-3 pr-5 pb-5 ${
          visible ? "max-lg:col-start-2" : "max-lg:col-start-1"
        }  max-sm:px-2  max-sm:grid  max-lg:p-4`}
      >
        <Content />
      </div>
    </div>
  );
}

export default App;
