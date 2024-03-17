import PropTypes from "prop-types";
const CurCooking = ({ cookingItem, idNum }) => {
  const { recipe_name, preparing_time_minutes, calories } = cookingItem;
  return (
    <>
      {/* row 1 */}
      <tr className="text-base font-normal font-firasans  text-[#282828] text-opacity-60 bg-[#282828} bg-opacity-5">
        <th className="pl-0 md:pl-4">{idNum}</th>
        <td className="pl-0">{recipe_name}</td>
        <td className="pl-0">{preparing_time_minutes} Minutes</td>
        <td className="pl-0">{calories}</td>
      </tr>
    </>
  );
};
CurCooking.propTypes = {
  cookingItem: PropTypes.object.isRequired,
  idNum: PropTypes.number.isRequired,
};

export default CurCooking;
