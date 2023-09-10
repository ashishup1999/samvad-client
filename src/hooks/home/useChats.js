import { useContext, useEffect, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { COMMON_TEXTS } from "../../constants/CommonContants";
import { getUserAllChats } from "../../services/home";

const initialState = {
  allChats: [],
};

const useChats = () => {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { username, fullName } = basicDetails;
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { allChats } = state;

  useEffect(() => {
    getAllChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allChatsSortComparator = (obj1, obj2) => {
    return obj1?.lastMsg?.timestamp > obj2?.lastMsg?.timestamp;
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

  return { fullName, allChats };
};

export default useChats;
