import { useContext, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import {
  COMMON_TEXTS,
  ERROR_TEXTS,
  SCREENS,
} from "../../constants/CommonConstants";
import { AuthContext } from "../../contexts/auth/AuthProvider";
import { deleteUser, updateSingleValue } from "../../services/home";

const initialState = {
  chooseAvatar: false,
  selectedAvatar: "",
  deleteAcc: false,
  usernameErr: "",
  enteredUsername: "",
  editUserInfo: false,
  editPassword: false,
};

const useSettings = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {
    chooseAvatar,
    selectedAvatar,
    deleteAcc,
    usernameErr,
    enteredUsername,
    editUserInfo,
    editPassword,
  } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username } = basicDetails;
  const { setAuthState } = useContext(AuthContext);

  const onEditProfileImg = () => {
    dispatch({
      payload: {
        chooseAvatar: true,
      },
    });
  };

  const closeAvatarModal = () => {
    dispatch({ payload: { chooseAvatar: false } });
  };

  const changeAvatar = async () => {
    try {
      const payload = { username, key: "profileImg", value: selectedAvatar };
      const res = await updateSingleValue(payload);
      if (res?.status == COMMON_TEXTS.SUCCESS) {
        dispatch({ payload: { chooseAvatar: false } });
        setBasicDetails({ payload: { profileImg: selectedAvatar } });
      } else {
        throw res;
      }
    } catch {
      // TODO
    }
  };

  const onAvatarSelection = (e) => {
    const { testid } = e.currentTarget.dataset;
    dispatch({
      payload: {
        selectedAvatar: testid,
      },
    });
  };

  const onLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isAuthenticated");
    setAuthState({ payload: { isAuthenticated: false } });
  };

  const onBack = () => {
    setBasicDetails({
      payload: { currentLeftScreen: SCREENS.ALL_CHATS },
    });
  };

  const onClickDeleteAcc = () => {
    dispatch({ payload: { deleteAcc: true } });
  };

  const cancelDeleteAccount = () => {
    dispatch({
      payload: { deleteAcc: false, enteredUsername: "", usernameErr: "" },
    });
  };

  const confirmDeleteAccount = async () => {
    try {
      if (username === enteredUsername) {
        const res = await deleteUser(username);
        if (res?.status === COMMON_TEXTS.SUCCESS) {
          localStorage.removeItem("username");
          localStorage.removeItem("isAuthenticated");
          setAuthState({ payload: { isAuthenticated: false } });
        } else {
          throw res;
        }
      } else {
        dispatch({ payload: { usernameErr: ERROR_TEXTS.WRONG_USERNAME } });
      }
    } catch {
      //TODO error
    }
  };

  const onChangeUsername = (e) => {
    dispatch({ payload: { enteredUsername: e.target.value } });
  };

  const setEditUserInfo = (val) => {
    dispatch({ payload: { editUserInfo: val } });
  };

  const setEditPassword = (val) => {
    dispatch({ payload: { editPassword: val } });
  };

  return {
    selectedAvatar,
    chooseAvatar,
    deleteAcc,
    usernameErr,
    enteredUsername,
    editUserInfo,
    editPassword,
    onBack,
    onLogOut,
    onEditProfileImg,
    onAvatarSelection,
    changeAvatar,
    onClickDeleteAcc,
    cancelDeleteAccount,
    confirmDeleteAccount,
    onChangeUsername,
    setEditUserInfo,
    setEditPassword,
    closeAvatarModal,
  };
};

export default useSettings;
