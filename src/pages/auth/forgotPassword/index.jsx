import { useForm } from "react-hook-form";
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
import { COMMON_TEXTS } from "../../../constants/CommonContants";

const ForgotPasswordForm = () => {
  const formMethods = useForm({ mode: "all" });
  const { register, formState, getValues, setError, setValue } = formMethods;
  const { errors } = formState;
  const { stepper, onGetOTP, onValidateOTP, onChangePassword, onResendOtp } =
    useForgotPassword({ setError, setValue, getValues, errors });
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  return (
    <>
      {(mobileMax || tabletMax) && (
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
          <Button onClick={onGetOTP}>Get OTP</Button>
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
          <ExtraOption onClick={onResendOtp}>Resend OTP</ExtraOption>
          <Button onClick={onValidateOTP}>Validate OTP</Button>
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
          <Button onClick={onChangePassword}>Change Password</Button>
        </>
      )}
      {stepper === "password-changed" && (
        <>
          <PassChangedwrapper>
            <CheckIcon src={ICONS.checkCircleIcon} />
            <PassChangedText>Password changed successfuly</PassChangedText>
          </PassChangedwrapper>
          <Button>
            <GoToLoginLink to="/auth/">Go to Login</GoToLoginLink>
          </Button>
        </>
      )}
      {stepper === "password-not-changed" && (
        <>
          <PassChangedwrapper>
            <CheckIcon src={ICONS.redInfoIcon} />
            <PassChangedText>
              Sorry, password could not be changed, please try again!
            </PassChangedText>
          </PassChangedwrapper>
          <Button>
            <GoToLoginLink to="/auth/">Go to Login</GoToLoginLink>
          </Button>
        </>
      )}
    </>
  );
};

ForgotPasswordForm.propTypes = {};

export default ForgotPasswordForm;
