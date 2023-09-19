import { useContext, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { authenticateUser } from "../../services/auth";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { encryptData } from "../../utils/Encryption";

const initialState = {
  showPassword: false,
};

const useLogin = ({ getValues, setAuthState }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { showPassword } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { rememberMe } = basicDetails;

  const onEyeClick = () => {
    dispatch({
      payload: {
        showPassword: !showPassword,
      },
    });
  };

  const onRememberMe = () => {
    setBasicDetails({
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
          if (rememberMe) {
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("username", username);
          }
          setBasicDetails({
            payload: {
              username,
              fullName: res?.fullName,
              profileImg: res?.profileImg,
            },
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
