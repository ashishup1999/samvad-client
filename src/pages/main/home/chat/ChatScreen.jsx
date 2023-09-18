import { useContext } from "react";
import { BasicDetailsContext } from "../../../../contexts/common/BasicDetailsProvider";
import {
  BackIcon,
  BottomContainer,
  ChatScreenWrapper,
  MoreOptionsIcon,
  MsgBoxOthers,
  MsgBoxSender,
  MsgSectionDiv,
  ProfileImage,
  SendBoxContainer,
  SendIcon,
  TextInputBox,
  TimeLeft,
  TimeRight,
  UserFullName,
  UserInfoDiv,
} from "./ChatScreen.styles";
import useIndividualChats from "../../../../hooks/home/useIndividualChat";
import { AVATARS, ICONS } from "../../../../constants/StaticImages";
import { COMMON_TEXTS } from "../../../../constants/CommonConstants";
import { ScreenSizeContext } from "../../../../contexts/common/ScreenSizeProvider";
import { getDateAndTime } from "../../../../utils/CommonUtils";
import moment from "moment";

const ChatScreen = () => {
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const { basicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId, username } = basicDetails;
  const {
    otherUserInfo,
    msgs,
    typedMsg,
    msgDivSecRef,
    onTyping,
    sendMessage,
    onBackClick,
    onKeyDown,
    onMsgDivScroll,
  } = useIndividualChats();
  
  return (
    <>
      <ChatScreenWrapper id={selectedChatId}>
        <UserInfoDiv>
          {(mobileMax || tabletMax) && (
            <BackIcon src={ICONS.backIconWhite} alt="" onClick={onBackClick} />
          )}
          <ProfileImage src={AVATARS[otherUserInfo?.profileImg]} alt="" />
          <UserFullName>{otherUserInfo?.fullName}</UserFullName>
          <MoreOptionsIcon src={ICONS.menuDots} alt="" />
        </UserInfoDiv>
        <MsgSectionDiv ref={msgDivSecRef} onScroll={onMsgDivScroll}>
          {msgs.map((msgObj) => {
            if (!msgObj || !msgObj?.msg) return <></>;
            return msgObj?.sender === username ? (
              <>
                <TimeRight>{getDateAndTime(moment, msgObj?.sentAt)}</TimeRight>
                <MsgBoxSender>{msgObj?.msg}</MsgBoxSender>
              </>
            ) : (
              <>
                <TimeLeft>{getDateAndTime(moment, msgObj?.sentAt)}</TimeLeft>
                <MsgBoxOthers>{msgObj?.msg}</MsgBoxOthers>
              </>
            );
          })}
        </MsgSectionDiv>
        <BottomContainer>
          <SendBoxContainer>
            <TextInputBox
              placeholder={COMMON_TEXTS.TYPING_SOMETHING_TEXT}
              value={typedMsg}
              onChange={onTyping}
              onKeyDown={onKeyDown}
            />
            <SendIcon src={ICONS.sendIconWhite} onClick={sendMessage} />
          </SendBoxContainer>
        </BottomContainer>
      </ChatScreenWrapper>
    </>
  );
};

export default ChatScreen;
