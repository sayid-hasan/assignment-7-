import PropTypes from "prop-types";

const Sidebartitle = ({ recipeItems }) => {
  return (
    <div>
      <h4 className="text-center text-[24px] font-semibold font-lexend">
        Want to cook: {recipeItems.length}
      </h4>
    </div>
  );
};

Sidebartitle.propTypes = {
  recipeItems: PropTypes.array.isRequired,
};

export default Sidebartitle;
