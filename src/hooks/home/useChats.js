import { useContext, useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import {
  COMMON_TEXTS,
  SCREENS,
  SOCKET_NAMES,
} from "../../constants/CommonConstants";
import { getUserAllChats, getUsernamesByChatId } from "../../services/home";
import { SocketContext } from "../../contexts/common/SocketProvider";
import moment from "moment";

const initialState = {
  allChats: [],
};

const useChats = () => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, fullName, profileImg, msgsUpdated } = basicDetails;
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
    return (
      moment(obj2?.lastMsg?.sentAt).valueOf() -
      moment(obj1?.lastMsg?.sentAt).valueOf()
    );
  };

  const getAllChats = async () => {
    try {
      const res = await getUserAllChats(username);
      if (res?.status === COMMON_TEXTS.SUCCESS) {
        const tAllChats = [];
        res?.chats?.forEach((obj) => {
          if (obj?.username) {
            const allChatsPayload = {};
            allChatsPayload.username = obj?.username;
            allChatsPayload.fullName = obj?.fullName;
            allChatsPayload.profileImg = obj?.profileImg;
            allChatsPayload.chatId = obj?.chatId;
            allChatsPayload.lastMsg = { ...obj?.lastMsg };
            tAllChats.push(allChatsPayload);
            socket.emit(SOCKET_NAMES.JOIN_ROOM, { chatId: obj?.chatId });
          }
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

  const onChatSearch = (e) => {
    const searchKey = e.target.value;
    if (searchKey) {
      const tempAllChats = allChats.filter(
        (obj) =>
          obj?.username?.includes(searchKey) ||
          obj?.fullName?.includes(searchKey)
      );
      dispatch({ payload: { allChats: tempAllChats } });
    } else {
      getAllChats();
    }
  };

  const onSettingsClick = () => {
    setBasicDetails({ payload: { currentLeftScreen: SCREENS.SETTINGS } });
  };

  return { fullName, profileImg, allChats, onSettingsClick, onChatSearch };
};

export default useChats;
