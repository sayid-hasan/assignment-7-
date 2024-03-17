import PropTypes from "prop-types";
import RecipeItem from "../RecipeItem/RecipeItem";
import Sidebartitle from "../Sidebartitle/Sidebartitle";

const Sidebar = ({ recipeItems }) => {
  return (
    <div className="md:w-1/3 flex flex-col">
      <Sidebartitle recipeItems={recipeItems}></Sidebartitle>
      <div className="">
        <table className="table px-0  md:px-4 table-zebra  border-collapse ">
          {/* head */}
          <thead>
            <tr>
              <th className="pr-4 pl-0"></th>
              <th className="pl-0">Name</th>
              <th className="pl-0">Times</th>
              <th className="pl-0">Calories</th>
              <th className="pl-0"></th>
            </tr>
          </thead>
          <tbody>
            {recipeItems.map((recipeItem, idx) => (
              <RecipeItem
                key={idx}
                idNum={idx}
                recipeItem={recipeItem}
              ></RecipeItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  recipeItems: PropTypes.array.isRequired,
};

export default Sidebar;
