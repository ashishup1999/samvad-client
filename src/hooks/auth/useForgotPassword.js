import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { changePassword, getEmailOtp, verifyOtp } from "../../services/auth";

const initialState = {
  stepper: "enter-email",
  enteredEmail: "",
};

const useForgotPassword = ({ setError, getValues, errors }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { stepper, enteredEmail } = state;

  const onGetOTP = async () => {
    try {
      if (!errors?.message?.email || getValues()?.email) {
        const res = await getEmailOtp({ email: getValues()?.email });
        if (res.status !== "SUCCESS" || res?.responseCd !== "0") throw res;
        dispatch({
          payload: { stepper: "enter-otp", enteredEmail: getValues()?.email },
        });
      }
    } catch (error) {
      if (error?.errCode) {
        setError("email", { message: error?.responseCd });
      }
    }
  };

  const onValidateOTP = async () => {
    try {
      if (!errors?.message?.otp || getValues()?.otp) {
        const res = await verifyOtp({
          email: enteredEmail,
          enteredOtp: Number(getValues()?.otp),
        });
        if (res.status !== "SUCCESS" || res?.responseCd !== "0") throw res;
        dispatch({ payload: { stepper: "change-password" } });
      }
    } catch (error) {
      if (error?.errCode) {
        setError("otp", { message: error?.responseCd });
      }
    }
  };

  const onResendOtp = async () => {
    try {
      const res = await getEmailOtp({ email: enteredEmail });
      if (res.status !== "SUCCESS" || res?.responseCd !== "0") throw res;
    } catch (error) {
      setError("otp", { message: error?.responseCd });
    }
  };

  const onChangePassword = async () => {
    try {
      if (getValues()?.new_password && getValues()?.confirm_password) {
        if (getValues()?.new_password === getValues()?.confirm_password) {
          const res = await changePassword({
            email: enteredEmail,
            password: getValues()?.confirm_password,
          });
          if (res.status !== "SUCCESS" || res?.responseCd !== "0") throw res;
          dispatch({ payload: { stepper: "password-changed" } });
        } else {
          setError("confirm_password", {
            message: "Both password does not match!",
          });
        }
      }
    } catch (error) {
      if (error?.errCode) {
        dispatch({ payload: { stepper: "password-not-changed" } });
      }
    }
  };

  return { stepper, onGetOTP, onValidateOTP, onChangePassword, onResendOtp };
};

export default useForgotPassword;
