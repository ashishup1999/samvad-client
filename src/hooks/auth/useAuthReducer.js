import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";

const initialState = {
  isAuthenticated: false
};

const useAuthReducer = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  return { authState: state, setAuthState: dispatch };
};

export default useAuthReducer;
