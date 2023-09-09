import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";

const initialState = {
  isModalWrapperEnabled: false,
};

const useModal = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { isModalWrapperEnabled } = state;

  const modalWrapperSwitch = () => {
    dispatch({ payload: { isModalWrapperEnabled: !isModalWrapperEnabled } });
  };

  const onClickWrapper = (onClick) => {
    modalWrapperSwitch();
    onClick();
  };

  return { isModalWrapperEnabled, modalWrapperSwitch, onClickWrapper };
};

export default useModal;
