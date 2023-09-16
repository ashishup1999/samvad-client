import { Navigate, Route, Routes } from "react-router-dom";
import { IMAGES } from "../../constants/StaticImages";
import useAuth from "../../hooks/auth/useAuth";
import AuthOptions from "./AuthOptions";
import ForgotPasswordForm from "./forgotPassword";
import {
  LeftBg,
  LeftContainer,
  Logo,
  LogoHeader,
  RightBg,
  RightContainer,
} from "./index.styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthProvider";
import { ScreenSizeContext } from "../../contexts/common/ScreenSizeProvider";
import { COMMON_TEXTS } from "../../constants/CommonConstants";

const Auth = () => {
  const { authState } = useContext(AuthContext);
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const { isAuthenticated } = authState;
  const { authOption, animateFormOption, onOptionChange } = useAuth();

  return (
    <>
      {isAuthenticated && <Navigate to="/" replace={true} />}
      <LeftBg fullwidth={mobileMax || tabletMax} mobilewidth={mobileMax}>
        <LeftContainer
          fullwidth={mobileMax || tabletMax}
          mobilewidth={mobileMax}
        >
          <Routes>
            <Route
              path=""
              element={
                <AuthOptions
                  authOption={authOption}
                  animateFormOption={animateFormOption}
                  onOptionChange={onOptionChange}
                />
              }
            />
            <Route path="forgot-password" element={<ForgotPasswordForm />} />
          </Routes>
        </LeftContainer>
      </LeftBg>
      {!(mobileMax || tabletMax) && (
        <RightBg>
          <RightContainer>
            <Logo src={IMAGES.samvadLogo} />
            <LogoHeader>{COMMON_TEXTS.SAMVAD}</LogoHeader>
          </RightContainer>
        </RightBg>
      )}
    </>
  );
};

export default Auth;
