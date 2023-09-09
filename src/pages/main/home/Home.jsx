import { useContext } from "react";
import { COMMON_TEXTS } from "../../../constants/CommonContants";
import { IMAGES } from "../../../constants/StaticImages";
import {
  HomeWrapper,
  LeftContainer,
  LogoFooterText,
  LogoImage,
  LogoWrapper,
  RightContainer,
} from "./Home.styles";
import { ScreenSizeContext } from "../../../contexts/common/ScreenSizeProvider";
import {
  MobileLogo,
  MobileLogoDiv,
  MobileLogoHeader,
} from "../../auth/index.styles";
import Chats from "./Chats";

const Home = () => {
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  return (
    <HomeWrapper mobilewidth={mobileMax} tabletwidth={tabletMax}>
      <LeftContainer mobilewidth={mobileMax} tabletwidth={tabletMax}>
        {(mobileMax || tabletMax) && (
          <MobileLogoDiv>
            <MobileLogoHeader>{COMMON_TEXTS.SAMVAD}</MobileLogoHeader>
            <MobileLogo src={IMAGES.samvadLogo} />
          </MobileLogoDiv>
        )}
        <Chats />
      </LeftContainer>
      {!(mobileMax || tabletMax) && (
        <RightContainer>
          <LogoWrapper>
            <LogoImage src={IMAGES.samvadLogo} />
            <LogoFooterText>{COMMON_TEXTS.LOGO_FOOTER}</LogoFooterText>
          </LogoWrapper>
        </RightContainer>
      )}
    </HomeWrapper>
  );
};

export default Home;
