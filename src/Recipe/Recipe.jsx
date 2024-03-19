import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa6";
import { VscFlame } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
const Recipe = ({ recipe, handleWantToCook, isToast }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time_minutes,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card font-lexend box-border  border-[1px] border-solid border-[#282828] border-opacity-20 rounded-xl ">
        <figure>
          <img
            className="md:w-[420px] w-[280px] mb-0 object-fill object-center rounded-xl h-[200px]"
            src={recipe_image}
            alt={`pics of ${recipe_name}`}
          />
        </figure>
        <div className=" md:px-10">
          <h2 className="text-xl text-[#282828] font-semibold">
            {recipe_name}
          </h2>
          <p className="text-[#878787] font-firasans text-base font-normal leading-[30px]">
            {short_description}
          </p>
          <div className="min-h-[310px] border-y-[1px] border-x-0 pt-4  border-[#878787] border-opacity-60 border-solid ">
            <span className="text-lg font-bold leading-[23px] text-[#878787]">
              ingredients :{ingredients.length}
            </span>
            <ul className="text-[#878787] font-firasans text-lg leading-[32px] font-normal">
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="py-6 space-y-7">
            <div className="text-[#282828] text-opacity-80 font-firasans text-base flex justify-start  gap-5 leading-[19px] items-center">
              <div className="flex items-center gap-2">
                <FaRegClock></FaRegClock>
                <span>{preparing_time_minutes}</span> Minutes
              </div>

              <div className="flex items-start gap-2">
                <VscFlame></VscFlame>
                <span>{calories} Calories</span>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleWantToCook({ recipe })}
                className="btn bg-[#0be58a] text-black border-transparent hover:text-black rounded-full px-8 py-4"
              >
                Want to Cook
              </button>
              {isToast && toast("item already exist")}
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
  isToast: PropTypes.bool,
};

export default Recipe;
