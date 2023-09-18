import PropTypes from "prop-types";
import moment from "moment";
import {
  ChatAdditionalInfo,
  ChatBriefInfo,
  ChatInfoWrapper,
  LastMessage,
  NewMsgDot,
  ProfileImage,
  TimeAgo,
  UserFullName,
} from "./ChatInfoBox.styles";
import { timeFromNow } from "../../../utils/CommonUtils";
import { useContext } from "react";
import { BasicDetailsContext } from "../../../contexts/common/BasicDetailsProvider";
import { AVATARS } from "../../../constants/StaticImages";

const ChatInfoBox = ({ chatId, fullName, lastMsg, profileImg }) => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, selectedChatId } = basicDetails;

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
        <ProfileImage src={AVATARS[profileImg]} alt="" />
        <ChatBriefInfo>
          <UserFullName>{fullName}</UserFullName>
          <LastMessage>{lastMsg?.msg}</LastMessage>
        </ChatBriefInfo>
        <ChatAdditionalInfo>
          <TimeAgo>{timeFromNow(moment, lastMsg?.sentAt)}</TimeAgo>
          {!lastMsg?.seenBy?.includes(username) && <NewMsgDot />}
        </ChatAdditionalInfo>
      </ChatInfoWrapper>
    </>
  );
};

ChatInfoBox.propTypes = {
  chatId: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  lastMsg: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    sentAt: PropTypes.string.isRequired,
    seenBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  updateLatestChat: PropTypes.func.isRequired,
};

export default ChatInfoBox;
