import { useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { getChatInfoByChatId } from "../../services/home";
import { SocketContext } from "../../contexts/common/SocketProvider";
import { SOCKET_NAMES } from "../../constants/CommonContants";
import moment from "moment/moment";

const initialState = {
  otherUserInfo: null,
  msgs: [],
  typedMsg: "",
};

const useIndividualChats = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { otherUserInfo, msgs, typedMsg } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, selectedChatId, isSelectedChatNew } = basicDetails;
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    setOtherUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChatId]);

  const setOtherUserInfo = async () => {
    try {
      const { users, msgs } = await getChatInfoByChatId(
        username,
        selectedChatId
      );
      dispatch({
        payload: { otherUserInfo: users[0], msgs: msgs.reverse() },
      });
    } catch {
      //add error
    }
  };

  const onTyping = (e) => {
    const { value } = e.target;
    dispatch({ payload: { typedMsg: value } });
  };

  const sendMessage = () => {
    try {
      if (!typedMsg) return;
      const msgObj = {
        msgId: uuidv4(),
        msg: typedMsg,
        sender: username,
        sentAt: moment().valueOf(),
      };
      socket.emit(SOCKET_NAMES.SEND_MSG, {
        chatId: selectedChatId,
        msgObj,
        isSelectedChatNew,
      });
      dispatch({ payload: { msgs: [msgObj, ...msgs], typedMsg: "" } });
      setBasicDetails({ payload: { msgsUpdated: true } });
    } catch (error) {
      //error condition to be added
    }
  };

  socket.on(SOCKET_NAMES.RECEIVE_MSG, (msgInfo) => {
    dispatch({ payload: { msgs: [msgInfo?.msgObj, ...msgs], typedMsg: "" } });
    setBasicDetails({ payload: { msgsUpdated: true } });
  });

  const onBackClick = () => {
    setBasicDetails({ payload: { selectedChatId: null } });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return {
    otherUserInfo,
    msgs,
    typedMsg,
    onTyping,
    sendMessage,
    onBackClick,
    onKeyDown,
  };
};

export default useIndividualChats;
