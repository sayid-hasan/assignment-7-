import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="mx-auto container md:w-[90%]">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
