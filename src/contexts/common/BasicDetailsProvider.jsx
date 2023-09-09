import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { defaultStateReducer } from "../../utils/CommonUtils";

export const BasicDetailsContext = createContext();

const initialState = {
  username: "",
  fullName: "",
};

const BasicDetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  return (
    <BasicDetailsContext.Provider
      value={{ basicDetails: state, setBasicDetails: dispatch }}
    >
      {children}
    </BasicDetailsContext.Provider>
  );
};

BasicDetailsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BasicDetailsProvider;
