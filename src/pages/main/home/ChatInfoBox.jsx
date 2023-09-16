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
import { useContext, useEffect } from "react";
import { BasicDetailsContext } from "../../../contexts/common/BasicDetailsProvider";
import { SocketContext } from "../../../contexts/common/SocketProvider";
import { SOCKET_NAMES } from "../../../constants/CommonConstants";

const ChatInfoBox = ({ chatId, fullName, lastMsg }) => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { selectedChatId } = basicDetails;
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.emit(SOCKET_NAMES.JOIN_ROOM, { chatId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <ProfileImage src="x.png" alt="" />
        <ChatBriefInfo>
          <UserFullName>{fullName}</UserFullName>
          <LastMessage>{lastMsg?.msg}</LastMessage>
        </ChatBriefInfo>
        <ChatAdditionalInfo>
          <TimeAgo>{timeFromNow(moment, lastMsg?.sentAt)}</TimeAgo>
        </ChatAdditionalInfo>
      </ChatInfoWrapper>
    </>
  );
};

ChatInfoBox.propTypes = {
  chatId: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  lastMsg: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    sentAt: PropTypes.string.isRequired,
  }),
  updateLatestChat: PropTypes.func.isRequired,
};

export default ChatInfoBox;
