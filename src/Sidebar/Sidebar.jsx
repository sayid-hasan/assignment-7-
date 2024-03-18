import PropTypes from "prop-types";
import RecipeItem from "../RecipeItem/RecipeItem";
import Sidebartitle from "../Sidebartitle/Sidebartitle";
import CurCooking from "../CurCooking/CurCooking";

const Sidebar = ({ recipeItems, handlePreparing, curCooking }) => {
  return (
    <div className="md:w-1/3 flex flex-col">
      <Sidebartitle recipeItems={recipeItems}></Sidebartitle>
      <div className="">
        <table className="table px-0  md:px-4 table-zebra  border-collapse ">
          {/* head */}
          <thead className="text-[#878787] text-base font-medium font-firasans">
            <tr>
              <th className=" pl-0"></th>
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
                handlePreparing={handlePreparing}
                recipeItem={recipeItem}
              ></RecipeItem>
            ))}
          </tbody>
        </table>
      </div>

      {/* preparing to cook */}
      <div>
        <div>
          <h4 className="text-center border-b-[1px] border-[#282828] border-opacity-15 border-solid pb-4 border-0 md:mx-16 text-[24px] font-semibold font-lexend">
            Currently cooking: {curCooking.length}
          </h4>
        </div>
        <table className="table px-0  md:px-4 table-zebra  border-collapse ">
          {/* head */}
          <thead className="text-[#878787] text-base font-medium font-firasans">
            <tr>
              <th className=" pl-0"></th>
              <th className="pl-0">Name</th>
              <th className="pl-0">Times</th>
              <th className="pl-0">Calories</th>
              <th className="pl-0"></th>
            </tr>
          </thead>
          <tbody>
            {curCooking.map((cookingItem, idx) => (
              <CurCooking
                key={idx}
                idNum={idx + 1}
                cookingItem={cookingItem}
              ></CurCooking>
            ))}

            {/* last row */}
            <tr className="text-base font-normal font-firasans  text-[#282828] text-opacity-60 bg-[#282828} bg-opacity-5">
              <th className="pl-0 md:pl-4">{}</th>
              <td className="pl-0">{}</td>
              <td className="pl-0">{}</td>
              <td className="pl-0">{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  recipeItems: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  curCooking: PropTypes.array,
};

export default Sidebar;
