import { useContext, useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { signUpUser } from "../../services/auth";
import {
  AUTH_TYPE,
  COMMON_TEXTS,
} from "../../constants/CommonConstants";
import { encryptData } from "../../utils/Encryption";
import { ErrorContext } from "../../contexts/common/ErrorProvider";

const initialState = {
  accountCreated: false,
  chooseAvatar: false,
  selectedAvatar: "",
  showSignUpToast: false,
};

const useSignUp = ({ getValues, onOptionChange }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { accountCreated, chooseAvatar, selectedAvatar, showSignUpToast } =
    state;
  const { dispatchError } = useContext(ErrorContext);

  useEffect(() => {
    if (accountCreated) {
      onOptionChange(AUTH_TYPE.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountCreated]);

  useEffect(() => {
    if (showSignUpToast) {
      setTimeout(() => {
        dispatch({
          payload: {
            showSignUpToast: false,
            accountCreated: true,
          },
        });
      }, 1000);
    }
  }, [showSignUpToast]);

  const onAvatarSelection = (e) => {
    const { testid } = e.currentTarget.dataset;
    dispatch({
      payload: {
        selectedAvatar: testid,
      },
    });
  };

  const setShowSignUpToast = (value) => {
    dispatch({ payload: { showSignUpToast: value } });
  };

  const onUserCheckClick = async () => {
    try {
      const username = getValues()?.username;
      const fullName = getValues()?.fullname;
      const email = getValues()?.email;
      const password = encryptData(getValues()?.password);
      if (username && fullName && email && password && selectedAvatar) {
        const payload = {
          username,
          email,
          password,
          fullName,
          profileImg: selectedAvatar,
        };
        const res = await signUpUser(payload);
        if (res?.status === COMMON_TEXTS.SUCCESS && res?.responseCd === "0") {
          dispatch({
            payload: {
              showSignUpToast: true,
              chooseAvatar: false,
            },
          });
        } else {
          throw res;
        }
      }
    } catch {
      dispatchError(true)
    }
  };

  const onSignUp = async () => {
    dispatch({ payload: { chooseAvatar: true } });
  };

  return {
    selectedAvatar,
    chooseAvatar,
    showSignUpToast,
    onAvatarSelection,
    onUserCheckClick,
    onSignUp,
    setShowSignUpToast,
  };
};

export default useSignUp;
