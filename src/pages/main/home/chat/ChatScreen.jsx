import { useContext } from "react";
import { BasicDetailsContext } from "../../../../contexts/common/BasicDetailsProvider";
import {
  BackIcon,
  BottomContainer,
  ChatScreenWrapper,
  CheckBox,
  MoreOptionsDiv,
  MoreOptionsIcon,
  MsgBox,
  MsgBoxOthers,
  MsgBoxSender,
  MsgSectionDiv,
  ProfileImage,
  ProfileImgBg,
  SendBoxContainer,
  SendIcon,
  TextInputBox,
  TimeLeft,
  TimeRight,
  UserFullName,
  UserInfoDiv,
  UserInfoWrapper,
} from "./ChatScreen.styles";
import useIndividualChats from "../../../../hooks/home/useIndividualChat";
import { AVATARS, ICONS } from "../../../../constants/StaticImages";
import { COMMON_TEXTS } from "../../../../constants/CommonConstants";
import { ScreenSizeContext } from "../../../../contexts/common/ScreenSizeProvider";
import { getDateAndTime } from "../../../../utils/CommonUtils";
import moment from "moment";
import ProfileCard from "../../../../components/ProfileCard";

const ChatScreen = () => {
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const { basicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId, username } = basicDetails;
  const {
    otherUserInfo,
    msgs,
    typedMsg,
    msgDivSecRef,
    deleteOption,
    profileCard,
    clickedMsg,
    onTyping,
    sendMessage,
    onBackClick,
    onKeyDown,
    onMsgDivScroll,
    toggleMoreOption,
    onClickDeleteMsgs,
    onSelectToDelMsgs,
    toggleProfileCard,
    onMessageClick,
  } = useIndividualChats();

  return (
    <>
      <ChatScreenWrapper id={selectedChatId}>
        <UserInfoWrapper>
          <UserInfoDiv>
            {(mobileMax || tabletMax) && (
              <BackIcon
                src={ICONS.backIconWhite}
                alt=""
                onClick={onBackClick}
              />
            )}
            <ProfileImgBg>
              <ProfileImage
                src={AVATARS[otherUserInfo?.profileImg]}
                alt=""
                onClick={() =>
                  toggleProfileCard({
                    username: otherUserInfo?.username,
                    fullName: otherUserInfo?.fullName,
                    profileImg: otherUserInfo?.profileImg,
                  })
                }
              />
            </ProfileImgBg>
            <UserFullName>{otherUserInfo?.fullName}</UserFullName>
            <MoreOptionsDiv>
              {deleteOption ? (
                <>
                  <MoreOptionsIcon
                    src={ICONS.deleteWhite}
                    alt=""
                    onClick={onClickDeleteMsgs}
                  />
                  <MoreOptionsIcon
                    src={ICONS.crossWhite}
                    alt=""
                    onClick={() => toggleMoreOption(false)}
                    padd="6px"
                  />
                </>
              ) : (
                <>
                  <MoreOptionsIcon
                    src={ICONS.selectAll}
                    alt=""
                    onClick={() => toggleMoreOption(true)}
                  />
                </>
              )}
            </MoreOptionsDiv>
          </UserInfoDiv>
        </UserInfoWrapper>
        <MsgSectionDiv ref={msgDivSecRef} onScroll={onMsgDivScroll}>
          {msgs.map((msgObj) => {
            if (!msgObj || !msgObj?.msg) return <></>;
            return msgObj?.sender === username ? (
              <>
                {msgObj?.msgId === clickedMsg && (
                  <TimeRight>
                    {getDateAndTime(moment, msgObj?.sentAt)}
                  </TimeRight>
                )}
                <MsgBox>
                  <MsgBoxSender
                    data-testid={msgObj?.msgId}
                    onClick={onMessageClick}
                  >
                    {msgObj?.msg}
                  </MsgBoxSender>
                  {deleteOption && (
                    <CheckBox
                      data-testid={msgObj?.msgId}
                      type="checkbox"
                      onChange={onSelectToDelMsgs}
                    />
                  )}
                </MsgBox>
              </>
            ) : (
              <>
                {msgObj?.msgId === clickedMsg && (
                  <TimeLeft>{getDateAndTime(moment, msgObj?.sentAt)}</TimeLeft>
                )}
                <MsgBox>
                  {deleteOption && (
                    <CheckBox
                      data-testid={msgObj?.msgId}
                      type="checkbox"
                      onClick={onSelectToDelMsgs}
                    />
                  )}
                  <MsgBoxOthers
                    data-testid={msgObj?.msgId}
                    onClick={onMessageClick}
                  >
                    {msgObj?.msg}
                  </MsgBoxOthers>
                </MsgBox>
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
      <ProfileCard
        isCardOpen={profileCard}
        {...profileCard}
        closeModal={() => toggleProfileCard(null)}
      />
    </>
  );
};

export default ChatScreen;
