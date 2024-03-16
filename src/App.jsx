import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Recipes from "./Recipes/Recipes";
import Recipetitle from "./Recipetitle/Recipetitle";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="mx-auto container md:w-[90%]">
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
        <Recipetitle></Recipetitle>
        <div className="flex flex-col md:flex-row ">
          <Recipes></Recipes>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
