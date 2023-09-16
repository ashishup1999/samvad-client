import { useContext, useEffect } from "react";
import { COMMON_TEXTS, SCREENS } from "../../../constants/CommonConstants";
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
import { BasicDetailsContext } from "../../../contexts/common/BasicDetailsProvider";
import ChatScreen from "./chat/ChatScreen";
import SearchNew from "./searchNew/SearchNew";
import AllChats from "./AllChats";

const Home = () => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId, currentLeftScreen } = basicDetails;
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const ChatScreenComp = <ChatScreen />;

  useEffect(() => {
    const payload = {};
    if (selectedChatId && (mobileMax || tabletMax)) {
      payload.currentLeftScreen = SCREENS.INDIVIDUAL_CHAT;
    } else {
      payload.currentLeftScreen = SCREENS.ALL_CHATS;
    }
    setBasicDetails({ payload });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileMax, tabletMax, selectedChatId]);

  return (
    <HomeWrapper mobilewidth={mobileMax} tabletwidth={tabletMax}>
      <LeftContainer mobilewidth={mobileMax} tabletwidth={tabletMax}>
        {currentLeftScreen === SCREENS.ALL_CHATS && <AllChats />}
        {currentLeftScreen === SCREENS.INDIVIDUAL_CHAT && ChatScreenComp}
        {currentLeftScreen === SCREENS.SEARCH_NEW && <SearchNew />}
        {currentLeftScreen === SCREENS.SETTINGS && <>Settings</>}
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
