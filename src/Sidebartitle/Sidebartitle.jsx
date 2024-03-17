import PropTypes from "prop-types";

const Sidebartitle = ({ recipeItems }) => {
  return (
    <div>
      <h4 className="text-center border-b-[1px] border-[#282828] border-opacity-15 border-solid pb-4 border-0 md:mx-16 text-[24px] font-semibold font-lexend">
        Want to cook: {recipeItems.length}
      </h4>
    </div>
  );
};

Sidebartitle.propTypes = {
  recipeItems: PropTypes.array.isRequired,
};

export default Sidebartitle;
