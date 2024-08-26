import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
function App() {
  return (
    <div className="grid  grid-cols-12 grid-rows-[100px_auto]  ">
      <div className="col-start-2 col-end-13 row-start-1 row-end-2 pt-5 px-3 max-sm:col-start-1">
        <Navbar />
      </div>

      <div className="row-end-3 row-start-1 flex justify-center items-stretch py-5  max-sm:hidden">
        <Sidebar />
      </div>

      <div className=" col-start-2 col-end-13 row-start-2 row-end-3 pr-5 pb-5  max-sm:col-start-1 max-sm:px-2  max-sm:grid">
        <Content />
      </div>
    </div>
  );
}

export default App;
