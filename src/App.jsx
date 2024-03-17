import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Recipes from "./Recipes/Recipes";
import Recipetitle from "./Recipetitle/Recipetitle";
import Sidebar from "./Sidebar/Sidebar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipeItems, setRecipeItems] = useState([]);
  const [curCooking, setCurCooking] = useState([]);

  const handleWantToCook = ({ recipe }) => {
    //console.log(recipe);
    const newRecipeItems = [...recipeItems, recipe];

    if (!recipeItems.includes(recipe)) {
      setRecipeItems(newRecipeItems);
    } else {
      toast("items alreday added");
    }
    // console.log(recipeItems);
  };
  const handlePreparing = (recipeitem) => {
    let remaining = recipeItems.filter((item) => item !== recipeitem);
    setRecipeItems(remaining);

    const newCurCooking = [...curCooking, recipeitem];

    setCurCooking(newCurCooking);
  };
  useEffect(() => {}, [curCooking]);

  return (
    <div className="mx-auto container md:w-[90%]">
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
        <Recipetitle></Recipetitle>
        <div className="flex flex-col md:flex-row ">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>

          <Sidebar
            handlePreparing={handlePreparing}
            recipeItems={recipeItems}
            curCooking={curCooking}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
