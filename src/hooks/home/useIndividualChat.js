import { useContext, useEffect, useReducer, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import {
  deleteMsgs,
  getChatInfoByChatId,
  markAllMsgsSeen,
} from "../../services/home";
import { SocketContext } from "../../contexts/common/SocketProvider";
import { COMMON_TEXTS, SOCKET_NAMES } from "../../constants/CommonConstants";
import moment from "moment/moment";

const initialState = {
  otherUserInfo: null,
  msgs: [],
  typedMsg: "",
  currPage: 0,
  maxPage: -1,
  deleteOption: false,
  msgsToBeDel: [],
};

const useIndividualChats = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const {
    otherUserInfo,
    msgs,
    typedMsg,
    currPage,
    maxPage,
    deleteOption,
    msgsToBeDel,
  } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username, selectedChatId, isSelectedChatNew } = basicDetails;
  const { socket } = useContext(SocketContext);
  const msgDivSecRef = useRef(null);

  useEffect(() => {
    if (selectedChatId) setOtherUserInfo(currPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChatId, currPage, msgs]);

  const setOtherUserInfo = async () => {
    try {
      if (maxPage < currPage) {
        const res = await getChatInfoByChatId(
          username,
          selectedChatId,
          currPage
        );
        dispatch({
          payload: {
            otherUserInfo: res?.users[0],
            msgs: [...msgs, ...res.msgs],
            maxPage: currPage,
          },
        });
        setBasicDetails({ payload: { msgsUpdated: true } });
      }
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

  socket.on(SOCKET_NAMES.RECEIVE_MSG, async (msgInfo) => {
    await markAllMsgsSeen(username, selectedChatId);
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

  const onMsgDivScroll = () => {
    const viewHt = msgDivSecRef?.current?.clientHeight;
    const scrollHt = msgDivSecRef?.current?.scrollHeight;
    const scrollTop = msgDivSecRef?.current?.scrollTop;
    if (scrollHt + scrollTop === viewHt) {
      dispatch({ payload: { currPage: currPage + 1 } });
    }
  };

  const toggleMoreOption = (val) => {
    dispatch({ payload: { deleteOption: val, msgsToBeDel: [] } });
  };

  const onClickDeleteMsgs = async () => {
    try {
      const payload = {
        username,
        chatId: selectedChatId,
        msgIds: msgsToBeDel,
      };
      const res = await deleteMsgs(payload);
      if (res?.status === COMMON_TEXTS.SUCCESS) {
        dispatch({
          payload: {
            msgs: [],
            deleteOption: false,
            msgsToBeDel: [],
            currPage: 0,
            maxPage: -1,
          },
        });
        setBasicDetails({ payload: { msgsUpdated: true } });
      } else {
        throw res;
      }
    } catch {
      //TODO Error
    }
  };

  const onSelectToDelMsgs = (e) => {
    const { checked, dataset } = e.target;
    const { testid } = dataset;
    if (checked) {
      dispatch({ payload: { msgsToBeDel: [...msgsToBeDel, testid] } });
    } else {
      dispatch({
        payload: {
          msgsToBeDel: msgsToBeDel.filter((msgId) => msgId !== testid),
        },
      });
    }
  };

  return {
    otherUserInfo,
    msgs,
    typedMsg,
    msgDivSecRef,
    deleteOption,
    onTyping,
    sendMessage,
    onBackClick,
    onKeyDown,
    onMsgDivScroll,
    toggleMoreOption,
    onClickDeleteMsgs,
    onSelectToDelMsgs,
  };
};

export default useIndividualChats;
