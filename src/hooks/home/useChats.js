import { useContext, useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { COMMON_TEXTS, SOCKET_NAMES } from "../../constants/CommonContants";
import { getUserAllChats, getUsernamesByChatId } from "../../services/home";
import { SocketContext } from "../../contexts/common/SocketProvider";

const initialState = {
  allChats: [],
};

const useChats = () => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, fullName, msgsUpdated } = basicDetails;
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { allChats } = state;
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    getAllChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (msgsUpdated) getAllChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgsUpdated]);

  socket.on(SOCKET_NAMES.RECEIVE_MSG, () => {
    setBasicDetails({ payload: { msgsUpdated: true } });
  });

  socket.on(SOCKET_NAMES.NEW_MESSAGE, async (chatId) => {
    const { usernames } = await getUsernamesByChatId(chatId);
    if (usernames.includes(username)) {
      socket.emit(SOCKET_NAMES.JOIN_ROOM, { chatId });
      setBasicDetails({
        payload: { msgsUpdated: true, isSelectedChatNew: false },
      });
    }
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
        setBasicDetails({ payload: { msgsUpdated: false } });
      } else {
        throw res;
      }
    } catch {
      //TODO Error screen
    }
  };

  return { fullName, allChats };
};

export default useChats;
