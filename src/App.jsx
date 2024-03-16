import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Recipes from "./Recipes/Recipes";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="mx-auto container md:w-[90%]">
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
