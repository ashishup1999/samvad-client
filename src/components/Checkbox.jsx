import PropTypes from "prop-types";
import { ICONS } from "../constants/StaticImages";

const Checkbox = ({ size, isChecked, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <img
        src={isChecked ? ICONS.checkboxFillIcon : ICONS.checkboxBlankIcon}
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

Checkbox.propTypes = {
  size: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Checkbox;
