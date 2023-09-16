import { useContext } from "react";
import { Else, If, Then } from "react-if";
import { COMMON_TEXTS } from "../../../constants/CommonConstants";
import { ICONS, IMAGES } from "../../../constants/StaticImages";
import {
  CreateChatButton,
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
import SearchNew from "./searchNew/SearchNew";

const Home = () => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId, createSearch } = basicDetails;
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const ChatScreenComp = <ChatScreen />;

  return (
    <HomeWrapper mobilewidth={mobileMax} tabletwidth={tabletMax}>
      <LeftContainer mobilewidth={mobileMax} tabletwidth={tabletMax}>
        <If condition={createSearch}>
          <Then>
            <SearchNew />
          </Then>
          <Else>
            <If condition={mobileMax || tabletMax}>
              <Then>
                <If condition={selectedChatId}>
                  <Then>{ChatScreenComp}</Then>
                  <Else>
                    <MobileLogoDiv>
                      <MobileLogoHeader>{COMMON_TEXTS.SAMVAD}</MobileLogoHeader>
                      <MobileLogo src={IMAGES.samvadLogo} />
                    </MobileLogoDiv>
                  </Else>
                </If>
              </Then>
            </If>
            <If condition={!((mobileMax || tabletMax) && selectedChatId)}>
              <Then>
                <Chats />
                <CreateChatButton
                  src={ICONS.plusIconWhite}
                  alt=""
                  onClick={() =>
                    setBasicDetails({ payload: { createSearch: true } })
                  }
                />
              </Then>
            </If>
          </Else>
        </If>
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
