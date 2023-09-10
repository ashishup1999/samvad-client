import { useContext, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { authenticateUser } from "../../services/auth";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { encryptData } from "../../utils/Encryption";

const initialState = {
  showPassword: false,
  rememberMe: false,
};

const useLogin = ({ getValues, setAuthState }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { showPassword, rememberMe } = state;
  const { setBasicDetails } = useContext(BasicDetailsContext);

  const onEyeClick = () => {
    dispatch({
      payload: {
        showPassword: !showPassword,
      },
    });
  };

  const onRememberMe = () => {
    dispatch({
      payload: {
        rememberMe: !rememberMe,
      },
    });
  };

  const onLogin = async () => {
    try {
      const username = getValues()?.username_email;
      const password = getValues()?.password;
      if (username && password) {
        const payload = {
          username: getValues()?.username_email,
          email: getValues()?.username_email,
          password: encryptData(getValues()?.password),
        };
        const res = await authenticateUser(payload);
        if (res?.status === "SUCCESS") {
          setBasicDetails({
            payload: { username, fullName: res?.fullName },
          });
          setAuthState({ payload: { isAuthenticated: res?.isAuthenticated } });
        } else {
          throw res;
        }
      }
    } catch {
      console.log("Facing technical issues in login");
    }
  };

  return {
    showPassword,
    rememberMe,
    onEyeClick,
    onRememberMe,
    onLogin,
  };
};

export default useLogin;
