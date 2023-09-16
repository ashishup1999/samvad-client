import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { AUTH_TYPE } from "../../constants/CommonConstants";

const initialState = {
  authOption: AUTH_TYPE.login,
  animateFormOption: false,
  forgotPassword: false,
};

const useAuth = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { authOption, animateFormOption, forgotPassword } = state;

  const onOptionChange = (clickedOption) => {
    if (clickedOption !== authOption) {
      dispatch({
        payload: {
          authOption:
            authOption === AUTH_TYPE.signup
              ? AUTH_TYPE.login
              : AUTH_TYPE.signup,
          animateFormOption: true,
        },
      });
    }
  };

  return {
    authOption,
    animateFormOption,
    forgotPassword,
    onOptionChange,
  };
};

export default useAuth;
