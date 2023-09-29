import { useContext, useReducer } from "react";
import { debounce, defaultStateReducer } from "../../utils/CommonUtils";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import { createChat, getUsersOnSearch } from "../../services/home";
import { COMMON_TEXTS, SCREENS } from "../../constants/CommonConstants";
import { ErrorContext } from "../../contexts/common/ErrorProvider";

const initialState = {
  searchValue: "",
  searchResults: [],
  profileCard: null,
};

const useSearchNew = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { searchValue, searchResults, profileCard } = state;
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { username } = basicDetails;
  const { dispatchError } = useContext(ErrorContext);

  const searchFunction = async () => {
    try {
      const res = await getUsersOnSearch(username, searchValue);
      dispatch({
        payload: {
          searchResults: res,
        },
      });
    } catch {
      dispatchError(true);
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
        currentLeftScreen: SCREENS.ALL_CHATS,
      },
    });
  };

  const onCrateChat = async (e) => {
    try {
      const { id } = e.currentTarget;
      const res = await createChat({ usernames: [username, id] });
      if (res?.status === COMMON_TEXTS.SUCCESS) {
        setBasicDetails({
          payload: {
            selectedChatId: res?.chatId,
            currentLeftScreen: SCREENS.ALL_CHATS,
            isSelectedChatNew: true,
          },
        });
      } else {
        throw res;
      }
    } catch {
      dispatchError(true);
    }
  };

  const toggleProfileCard = (val) => {
    dispatch({
      payload: {
        profileCard: val,
      },
    });
  };

  return {
    searchValue,
    searchResults,
    profileCard,
    onChange,
    onSearch,
    onBackToChat,
    onCrateChat,
    toggleProfileCard
  };
};

export default useSearchNew;
