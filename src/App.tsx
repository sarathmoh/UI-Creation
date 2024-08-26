import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
function App() {
  return (
    <div className="grid  grid-cols-12 grid-rows-[100px_auto] ">
      <Navbar />
      <Sidebar />
      <div className=" col-start-2 col-end-13 row-start-2 row-end-3 pr-5 pb-5 ">
        <Content />
      </div>
    </div>
  );
}

export default App;
