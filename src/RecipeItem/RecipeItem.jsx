import PropTypes from "prop-types";

const RecipeItem = ({ recipeItem }) => {
  console.log(recipeItem);
  const { recipe_id, recipe_name, preparing_time_minutes, calories } =
    recipeItem;
  return (
    <>
      {/* row 1 */}
      <tr className="text-base font-normal font-firasans  text-[#282828] text-opacity-60 bg-[#282828} bg-opacity-5">
        <th className="pl-0 md:pl-4">{recipe_id}</th>
        <td className="pl-0">{recipe_name}</td>
        <td className="pl-0">{preparing_time_minutes} Minutes</td>
        <td className="pl-0">{calories}</td>
        <td className=" text-center mt-2  btn min-h-0 bg-[#0be58a] h-[20px] flex justify-center items-center  rounded-full px-8 py-4">
          Preparing
        </td>
      </tr>
    </>
  );
};

RecipeItem.propTypes = {
  recipeItem: PropTypes.object.isRequired,
};

export default RecipeItem;
