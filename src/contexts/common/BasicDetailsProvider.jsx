import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { getUserInfo } from "../../services/home";
import { SCREENS } from "../../constants/CommonConstants";
import { AuthContext } from "../auth/AuthProvider";
import { LoaderContext } from "./LoaderProvider";

export const BasicDetailsContext = createContext();

const initialState = {
  username: localStorage.getItem("username") || "",
  fullName: "",
  profileImg: "",
  email: "",
  rememberMe: false,
  selectedChatId: "",
  msgsUpdated: false,
  createSearch: false,
  isSelectedChatNew: false,
  currentLeftScreen: SCREENS.CHATS,
};

const BasicDetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { authState } = useContext(AuthContext);
  const { dispatchLoader } = useContext(LoaderContext);

  const loadUserInfo = async () => {
    try {
      dispatchLoader(true);
      const { email, fullName, profileImg } = await getUserInfo(
        state?.username
      );
      dispatch({ payload: { email, fullName, profileImg } });
      dispatchLoader(false);
    } catch {
      dispatchLoader(false);
    }
  };

  useEffect(() => {
    if (state?.username) {
      loadUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.username]);

  useEffect(() => {
    if (!authState?.isAuthenticated) {
      dispatch({ payload: initialState });
    }
  }, [authState?.isAuthenticated]);

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
