import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { getUserInfo } from "../../services/home";

export const BasicDetailsContext = createContext();

const initialState = {
  username: localStorage.getItem("username") || "",
  fullName: "",
  email: "",
};

const BasicDetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const loadUserInfo = async () => {
    const { email, fullName } = await getUserInfo(state?.username);
    dispatch({ payload: { email, fullName } });
  };

  useEffect(() => {
    if (state?.username) {
      loadUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.username]);

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
