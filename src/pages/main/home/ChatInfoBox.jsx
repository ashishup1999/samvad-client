import PropTypes from "prop-types";
import moment from "moment";
import {
  ChatAdditionalInfo,
  ChatBriefInfo,
  ChatInfoWrapper,
  LastMessage,
  LastMessageBy,
  NewMsgDot,
  ProfileImage,
  TimeAgo,
  UserFullName,
} from "./ChatInfoBox.styles";
import { timeFromNow } from "../../../utils/CommonUtils";
import { useContext } from "react";
import { BasicDetailsContext } from "../../../contexts/common/BasicDetailsProvider";
import { AVATARS } from "../../../constants/StaticImages";
import { COMMON_TEXTS } from "../../../constants/CommonConstants";
import { useState } from "react";
import ProfileCard from "../../../components/ProfileCard";

const ChatInfoBox = ({
  chatId,
  otherUsername,
  fullName,
  lastMsg,
  profileImg,
}) => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, selectedChatId } = basicDetails;
  const [profileCard, setProfileCard] = useState(null);
  const isSeen = lastMsg?.seenBy?.includes(username);

  const onClickChat = (e) => {
    const { id } = e.currentTarget;
    setBasicDetails({ payload: { selectedChatId: id } });
  };

  return (
    <>
      <ChatInfoWrapper
        id={chatId}
        selected={selectedChatId === chatId}
        onClick={onClickChat}
      >
        <ProfileImage
          src={AVATARS[profileImg]}
          alt=""
          onClick={(e) => {
            e.stopPropagation();
            setProfileCard({ username: otherUsername, fullName, profileImg });
          }}
        />
        <ChatBriefInfo>
          <UserFullName>{fullName}</UserFullName>
          <LastMessage seen={isSeen}>
            {username === lastMsg?.sender && (
              <LastMessageBy>{COMMON_TEXTS.YOU}: </LastMessageBy>
            )}
            {lastMsg?.msg}
          </LastMessage>
        </ChatBriefInfo>
        <ChatAdditionalInfo>
          <TimeAgo>{timeFromNow(moment, lastMsg?.sentAt)}</TimeAgo>
          {!isSeen && <NewMsgDot />}
        </ChatAdditionalInfo>
      </ChatInfoWrapper>
      <ProfileCard
        isCardOpen={profileCard}
        {...profileCard}
        closeModal={() => setProfileCard(null)}
        onCreateChat={() => {
          setBasicDetails({ payload: { selectedChatId: chatId } });
          setProfileCard(null);
        }}
      />
    </>
  );
};

ChatInfoBox.propTypes = {
  chatId: PropTypes.string.isRequired,
  otherUsername: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  lastMsg: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    sentAt: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    seenBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  updateLatestChat: PropTypes.func.isRequired,
};

export default ChatInfoBox;
