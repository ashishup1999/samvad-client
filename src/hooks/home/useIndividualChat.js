import { useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { getChatInfoByChatId } from "../../services/home";
import { SocketContext } from "../../contexts/common/SocketProvider";
import { SOCKET_NAMES } from "../../constants/CommonContants";

const initialState = {
  otherUserInfo: null,
  msgs: [],
  typedMsg: "",
};

const useIndividualChats = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { otherUserInfo, msgs, typedMsg } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, selectedChatId } = basicDetails;
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
      dispatch({ payload: { otherUserInfo: users[0], msgs: msgs.reverse() } });
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
        sentAt: new Date(),
      };
      console.log(selectedChatId);
      socket.emit(SOCKET_NAMES.SEND_MSG, { chatId: selectedChatId, msgObj });
      dispatch({ payload: { msgs: [msgObj, ...msgs], typedMsg: "" } });
      setBasicDetails({ payload: { lastMsgObj: msgObj } });
    } catch (error) {
      //error condition to be added
    }
  };

  socket.on(SOCKET_NAMES.RECEIVE_MSG, (msgInfo) => {
    dispatch({ payload: { msgs: [msgInfo?.msgObj, ...msgs], typedMsg: "" } });
    setBasicDetails({ payload: { lastMsgInfo: msgInfo } });
  });

  const onBackClick = () => {
    setBasicDetails({ payload: { selectedChatId: null } });
  };

  return { otherUserInfo, msgs, typedMsg, onTyping, sendMessage, onBackClick };
};

export default useIndividualChats;
