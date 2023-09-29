import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { ICONS, IMAGES } from "../../../constants/StaticImages";
import useForgotPassword from "../../../hooks/auth/useForgotPassword";
import {
  Button,
  CheckIcon,
  ExtraOption,
  GoToLoginLink,
  PassChangedText,
  PassChangedwrapper,
  PrefixIcon,
} from "./index.styles";
import rules from "../../../utils/Validation";
import Input from "../../../components/Input";
import { useContext } from "react";
import { MobileLogo, MobileLogoDiv, MobileLogoHeader } from "../index.styles";
import { ScreenSizeContext } from "../../../contexts/common/ScreenSizeProvider";
import { COMMON_TEXTS } from "../../../constants/CommonConstants";

const ForgotPasswordForm = ({
  isEditAfterAuth = false,
  setModalFalse = () => {},
}) => {
  const formMethods = useForm({ mode: "all" });
  const { register, formState, getValues, setError, setValue } = formMethods;
  const { errors } = formState;
  const { stepper, onGetOTP, onValidateOTP, onChangePassword, onResendOtp } =
    useForgotPassword({
      setError,
      setValue,
      getValues,
      errors,
      isEditAfterAuth,
      setModalFalse,
    });
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const ExtraButton = (
    <Button onClick={() => setModalFalse(false)}>{COMMON_TEXTS.CANCEL}</Button>
  );

  return (
    <>
      {(mobileMax || tabletMax) && !isEditAfterAuth && (
        <MobileLogoDiv>
          <MobileLogoHeader>{COMMON_TEXTS.SAMVAD}</MobileLogoHeader>
          <MobileLogo src={IMAGES.samvadLogo} />
        </MobileLogoDiv>
      )}
      {stepper === "enter-email" && (
        <>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            prefix={<PrefixIcon src={ICONS.mailIcon} />}
            register={register}
            rule={rules.email}
            errors={errors}
          />
          <Button onClick={onGetOTP}>{COMMON_TEXTS.GET_OTP}</Button>
          {isEditAfterAuth && ExtraButton}
        </>
      )}
      {stepper === "enter-otp" && (
        <>
          <Input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            prefix={<PrefixIcon src={ICONS.keyboardIcon} />}
            register={register}
            errors={errors}
          />
          <ExtraOption onClick={onResendOtp}>
            {COMMON_TEXTS.RESEND_OTP}
          </ExtraOption>
          <Button onClick={onValidateOTP}>{COMMON_TEXTS.VALIDATE_OTP}</Button>
          {isEditAfterAuth && ExtraButton}
        </>
      )}
      {stepper === "change-password" && (
        <>
          <Input
            type="text"
            name="new_password"
            placeholder="New Password"
            prefix={<PrefixIcon src={ICONS.keyIcon} />}
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            name="confirm_password"
            placeholder="Confirm Password"
            prefix={<PrefixIcon src={ICONS.keyIcon} />}
            register={register}
            errors={errors}
          />
          <Button onClick={onChangePassword}>
            {COMMON_TEXTS.CHANGE_PASSWORD}
          </Button>
          {isEditAfterAuth && ExtraButton}
        </>
      )}
      {stepper === "password-changed" && (
        <>
          <PassChangedwrapper>
            <CheckIcon src={ICONS.checkCircleIcon} />
            <PassChangedText>{COMMON_TEXTS.PASSWORD_CHANGED}</PassChangedText>
          </PassChangedwrapper>
          <Button>
            <GoToLoginLink to="/auth/">
              {COMMON_TEXTS.GO_TO_LOGIN}
            </GoToLoginLink>
          </Button>
        </>
      )}
      {stepper === "password-not-changed" && (
        <>
          <PassChangedwrapper>
            <CheckIcon src={ICONS.redInfoIcon} />
            <PassChangedText>
              {COMMON_TEXTS.PASSWORD_CHANGE_FAIL}
            </PassChangedText>
          </PassChangedwrapper>
          <Button>
            <GoToLoginLink to="/auth/">
              {COMMON_TEXTS.GO_TO_LOGIN}
            </GoToLoginLink>
          </Button>
        </>
      )}
    </>
  );
};

ForgotPasswordForm.propTypes = {
  isEditAfterAuth: PropTypes.bool.isRequired,
  setModalFalse: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
