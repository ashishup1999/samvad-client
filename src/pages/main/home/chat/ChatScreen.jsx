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
  UserFullName,
  UserInfoDiv,
} from "./ChatScreen.styles";
import useIndividualChats from "../../../../hooks/home/useIndividualChat";
import { AVATARS, ICONS } from "../../../../constants/StaticImages";
import { COMMON_TEXTS } from "../../../../constants/CommonConstants";
import { ScreenSizeContext } from "../../../../contexts/common/ScreenSizeProvider";

const ChatScreen = () => {
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const { basicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId, username } = basicDetails;
  const {
    otherUserInfo,
    msgs,
    typedMsg,
    onTyping,
    sendMessage,
    onBackClick,
    onKeyDown,
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
        <MsgSectionDiv>
          {msgs.map((msgObj) => {
            if (!msgObj || !msgObj?.msg) return <></>;
            return msgObj?.sender === username ? (
              <MsgBoxSender>{msgObj?.msg}</MsgBoxSender>
            ) : (
              <MsgBoxOthers>{msgObj?.msg}</MsgBoxOthers>
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
