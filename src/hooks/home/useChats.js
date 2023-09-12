import { useContext, useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { COMMON_TEXTS, SOCKET_NAMES } from "../../constants/CommonContants";
import { getUserAllChats } from "../../services/home";
import { SocketContext } from "../../contexts/common/SocketProvider";

const initialState = {
  allChats: [],
};

const useChats = () => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, fullName, lastMsgInfo } = basicDetails;
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { allChats } = state;
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    getAllChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (lastMsgInfo) updateLatestChat(lastMsgInfo?.chatId, lastMsgInfo?.msgObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMsgInfo]);

  socket.on(SOCKET_NAMES.RECEIVE_MSG, (msgInfo) => {
    setBasicDetails({ payload: { lastMsgInfo: msgInfo } });
  });

  const allChatsSortComparator = (obj1, obj2) => {
    return obj1?.lastMsg?.sentAt > obj2?.lastMsg?.sentAt;
  };

  const getAllChats = async () => {
    try {
      const res = await getUserAllChats(username);
      if (res?.status === COMMON_TEXTS.SUCCESS) {
        const tAllChats = [];
        res?.chats?.forEach((obj) => {
          const allChatsPayload = {};
          allChatsPayload.username = obj?.username;
          allChatsPayload.fullName = obj?.fullName;
          allChatsPayload.chatId = obj?.chatId;
          allChatsPayload.lastMsg = { ...obj?.lastMsg };
          tAllChats.push(allChatsPayload);
        });
        tAllChats.sort(allChatsSortComparator);
        dispatch({ payload: { allChats: tAllChats } });
      } else {
        throw res;
      }
    } catch {
      //TODO Error screen
    }
  };

  const updateLatestChat = (chatId, lastMsg) => {
    let tempObj;
    let tempAllChats = [];
    allChats.forEach((obj) => {
      if (obj?.chatId === chatId) {
        tempObj = obj;
      } else {
        tempAllChats.push(obj);
      }
    });
    tempAllChats.unshift({ ...tempObj, lastMsg });
    dispatch({ payload: { allChats: tempAllChats } });
  };

  return { fullName, allChats };
};

export default useChats;
