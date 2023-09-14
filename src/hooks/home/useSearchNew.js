import { useContext, useReducer } from "react";
import { debounce, defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { createChat, getUsersOnSearch } from "../../services/home";
import { COMMON_TEXTS } from "../../constants/CommonContants";

const initialState = {
  searchValue: "",
  searchResults: [],
};

const useSearchNew = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { searchValue, searchResults } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username } = basicDetails;

  const searchFunction = async () => {
    try {
      const res = await getUsersOnSearch(username, searchValue);
      dispatch({
        payload: {
          searchResults: res,
        },
      });
    } catch {
      //error condition will be added
    }
  };

  const onSearch = debounce(async () => await searchFunction());

  const onChange = (e) => {
    dispatch({
      payload: {
        searchValue: e.target.value,
      },
    });
  };

  const onBackToChat = () => {
    setBasicDetails({
      payload: {
        createSearch: false,
      },
    });
  };

  const onCrateChat = async (e) => {
    try {
      const { id } = e.currentTarget;
      const res = await createChat({ usernames: [username, id] });
      if (res?.status === COMMON_TEXTS.SUCCESS) {
        setBasicDetails({
          payload: { selectedChatId: res?.chatId, createSearch: false },
        });
      } else {
        throw res;
      }
    } catch {
      //error writting pending
    }
  };

  return {
    searchValue,
    searchResults,
    onChange,
    onSearch,
    onBackToChat,
    onCrateChat,
  };
};

export default useSearchNew;
