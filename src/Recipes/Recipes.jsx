import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleWantToCook, isToast }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3 grid md:grid-cols-2 gap-5">
      {recipes.map((recipe, idx) => (
        <Recipe
          key={idx}
          idNum={idx}
          recipe={recipe}
          handleWantToCook={handleWantToCook}
          isToast={isToast}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
  isToast: PropTypes.bool,
};

export default Recipes;
