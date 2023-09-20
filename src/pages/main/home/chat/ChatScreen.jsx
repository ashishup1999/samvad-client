import { useContext } from "react";
import { BasicDetailsContext } from "../../../../contexts/common/BasicDetailsProvider";
import {
  BackIcon,
  BottomContainer,
  ChatScreenWrapper,
  CheckBox,
  MoreOption,
  MoreOptionsDiv,
  MoreOptionsIcon,
  MsgBox,
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
    onTyping,
    sendMessage,
    onBackClick,
    onKeyDown,
    onMsgDivScroll,
    toggleMoreOption,
    onClickDeleteMsgs,
    onSelectToDelMsgs,
    toggleProfileCard,
  } = useIndividualChats();

  return (
    <>
      <ChatScreenWrapper id={selectedChatId}>
        <UserInfoDiv>
          {(mobileMax || tabletMax) && (
            <BackIcon src={ICONS.backIconWhite} alt="" onClick={onBackClick} />
          )}
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
          <UserFullName>{otherUserInfo?.fullName}</UserFullName>
          <MoreOptionsDiv>
            {deleteOption ? (
              <>
                <MoreOption onClick={onClickDeleteMsgs}>
                  {COMMON_TEXTS.DELETE_MSGS}
                </MoreOption>
                <MoreOption onClick={() => toggleMoreOption(false)}>
                  {COMMON_TEXTS.CANCEL}
                </MoreOption>
              </>
            ) : (
              <MoreOptionsIcon
                src={ICONS.deleteWhite}
                alt=""
                onClick={() => toggleMoreOption(true)}
              />
            )}
          </MoreOptionsDiv>
        </UserInfoDiv>
        <MsgSectionDiv ref={msgDivSecRef} onScroll={onMsgDivScroll}>
          {msgs.map((msgObj) => {
            if (!msgObj || !msgObj?.msg) return <></>;
            return msgObj?.sender === username ? (
              <>
                <TimeRight>{getDateAndTime(moment, msgObj?.sentAt)}</TimeRight>
                <MsgBox>
                  <MsgBoxSender>{msgObj?.msg}</MsgBoxSender>
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
                <TimeLeft>{getDateAndTime(moment, msgObj?.sentAt)}</TimeLeft>
                <MsgBox>
                  {deleteOption && (
                    <CheckBox
                      data-testid={msgObj?.msgId}
                      type="checkbox"
                      onClick={onSelectToDelMsgs}
                    />
                  )}
                  <MsgBoxOthers>{msgObj?.msg}</MsgBoxOthers>
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
