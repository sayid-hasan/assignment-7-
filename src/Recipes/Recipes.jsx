import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./../../public/items.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3 grid md:grid-cols-2 gap-5">
      {recipes.map((recipe, idx) => (
        <Recipe key={idx} recipe={recipe}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
