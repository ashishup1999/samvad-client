import { useContext } from "react";
import { ScreenSizeContext } from "../../../contexts/common/ScreenSizeProvider";
import {
  MobileLogo,
  MobileLogoDiv,
  MobileLogoHeader,
} from "../../auth/index.styles";
import { COMMON_TEXTS, SCREENS } from "../../../constants/CommonConstants";
import { ICONS, IMAGES } from "../../../constants/StaticImages";
import Chats from "./Chats";
import { CreateChatButton } from "./Home.styles";
import { BasicDetailsContext } from "../../../contexts/common/BasicDetailsProvider";

const AllChats = () => {
  const { setBasicDetails } = useContext(BasicDetailsContext);
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  return (
    <>
      {(mobileMax || tabletMax) && (
        <MobileLogoDiv>
          <MobileLogoHeader>{COMMON_TEXTS.SAMVAD}</MobileLogoHeader>
          <MobileLogo src={IMAGES.samvadLogo} />
        </MobileLogoDiv>
      )}
      <Chats />
      <CreateChatButton
        src={ICONS.plusIconWhite}
        alt=""
        onClick={() =>
          setBasicDetails({
            payload: {
              currentLeftScreen: SCREENS.SEARCH_NEW,
            },
          })
        }
      />
    </>
  );
};

export default AllChats;
