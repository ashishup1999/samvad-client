import { useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { signUpUser } from "../../services/auth";
import {
  AUTH_TYPE,
  COMMON_TEXTS,
  ERROR_TEXTS,
} from "../../constants/CommonContants";
import { encryptData } from "../../utils/Encryption";

const initialState = {
  accountCreated: false,
};

const useSignUp = ({ getValues, onOptionChange }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { accountCreated } = state;

  useEffect(() => {
    if (accountCreated) {
      onOptionChange(AUTH_TYPE.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountCreated]);

  const onSignUp = async () => {
    try {
      const username = getValues()?.username;
      const fullname = getValues()?.fullname;
      const email = getValues()?.email;
      const password = encryptData(getValues()?.password);
      if (username && fullname && email && password) {
        const payload = {
          username,
          email,
          password,
          fullname,
        };
        const res = await signUpUser(payload);
        if (res?.status === COMMON_TEXTS.SUCCESS && res?.responseCd === "0") {
          dispatch({ payload: { accountCreated: true } });
        } else {
          throw res;
        }
      }
    } catch {
      console.log(ERROR_TEXTS.TECHNICAL);
    }
  };

  return {
    onSignUp,
  };
};

export default useSignUp;
