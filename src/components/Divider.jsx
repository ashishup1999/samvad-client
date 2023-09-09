import PropTypes from "prop-types";

const Divider = ({ width, color }) => {
  return <div style={{ width, backgroundColor: color, height: "2px" }}></div>;
};

Divider.propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Divider;
