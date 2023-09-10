import PropTypes from "prop-types";
import moment from "moment";
import {
  ChatAdditionalInfo,
  ChatBriefInfo,
  ChatInfoWrapper,
  LastMessage,
  ProfileImage,
  TimeAgo,
  UserFullName,
} from "./ChatInfoBox.styles";
import { timeFromNow } from "../../../utils/CommonUtils";

const ChatInfoBox = ({ fullName, lastMsg }) => {
  return (
    <>
      <ChatInfoWrapper>
        <ProfileImage src="x.png" alt="" />
        <ChatBriefInfo data-type={lastMsg?.chatId}>
          <UserFullName>{fullName}</UserFullName>
          <LastMessage>{lastMsg?.message}</LastMessage>
        </ChatBriefInfo>
        <ChatAdditionalInfo>
          <TimeAgo>{timeFromNow(moment, lastMsg?.createdAt)}</TimeAgo>
        </ChatAdditionalInfo>
      </ChatInfoWrapper>
    </>
  );
};

ChatInfoBox.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  lastMsg: PropTypes.shape({
    message: PropTypes.string.isRequired,
    chatId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default ChatInfoBox;
