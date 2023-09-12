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
import { BasicDetailsContext } from "../../../contexts/common/BasicDetailsProvider";
import ChatScreen from "./chat/ChatScreen";

const Home = () => {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId } = basicDetails;
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const ChatScreenComp = <ChatScreen />;

  return (
    <HomeWrapper mobilewidth={mobileMax} tabletwidth={tabletMax}>
      <LeftContainer mobilewidth={mobileMax} tabletwidth={tabletMax}>
        {(mobileMax || tabletMax) && !selectedChatId && (
          <MobileLogoDiv>
            <MobileLogoHeader>{COMMON_TEXTS.SAMVAD}</MobileLogoHeader>
            <MobileLogo src={IMAGES.samvadLogo} />
          </MobileLogoDiv>
        )}
        {(mobileMax || tabletMax) && selectedChatId ? (
          ChatScreenComp
        ) : (
          <Chats />
        )}
      </LeftContainer>
      {!(mobileMax || tabletMax) && (
        <RightContainer>
          {selectedChatId ? (
            ChatScreenComp
          ) : (
            <LogoWrapper>
              <LogoImage src={IMAGES.samvadLogo} />
              <LogoFooterText>{COMMON_TEXTS.LOGO_FOOTER}</LogoFooterText>
            </LogoWrapper>
          )}
        </RightContainer>
      )}
    </HomeWrapper>
  );
};

export default Home;
