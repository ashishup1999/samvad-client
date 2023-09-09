import PropTypes from "prop-types";
import LoginForm from "./login";
import SignupForm from "./signup";
import {
  FormOption,
  FormOptionContainer,
  FormOptionSlider,
  MobileLogo,
  MobileLogoDiv,
  MobileLogoHeader,
} from "./index.styles";
import { ScreenSizeContext } from "../../contexts/common/ScreenSizeProvider";
import { useContext } from "react";
import { IMAGES } from "../../constants/StaticImages";
import { AUTH_TYPE, COMMON_TEXTS } from "../../constants/CommonContants";

const AuthOptions = (props) => {
  const { authOption, animateFormOption, onOptionChange = () => {} } = props;
  const isLogin = authOption === AUTH_TYPE.login;
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  return (
    <>
      {(mobileMax || tabletMax) && (
        <MobileLogoDiv>
          <MobileLogoHeader>{COMMON_TEXTS.SAMVAD}</MobileLogoHeader>
          <MobileLogo src={IMAGES.samvadLogo} />
        </MobileLogoDiv>
      )}
      <FormOptionContainer>
        <FormOptionSlider authoption={authOption} animate={animateFormOption} />
        <FormOption
          enabled={isLogin}
          onClick={() => onOptionChange(AUTH_TYPE.login)}
        >
          Login
        </FormOption>
        <FormOption
          enabled={!isLogin}
          onClick={() => onOptionChange(AUTH_TYPE.signup)}
        >
          Sign Up
        </FormOption>
      </FormOptionContainer>
      {isLogin ? <LoginForm /> : <SignupForm onOptionChange={onOptionChange} />}
    </>
  );
};

AuthOptions.propTypes = {
  authOption: PropTypes.string.isRequired,
  animateFormOption: PropTypes.bool.isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default AuthOptions;
