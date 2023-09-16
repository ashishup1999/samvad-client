import { COMMON_TEXTS } from "../../../constants/CommonConstants";
import { ICONS } from "../../../constants/StaticImages";
import {
  ChatSearchWrapper,
  InputField,
  InputWrapper,
  SearchIcon,
} from "./ChatSearch.styles";

const ChatSearch = () => {
  return (
    <>
      <ChatSearchWrapper>
        <InputWrapper>
          <InputField placeholder={COMMON_TEXTS.SEARCH_CHATS} />
          <SearchIcon src={ICONS.searchIcon} alt="" />
        </InputWrapper>
      </ChatSearchWrapper>
    </>
  );
};

export default ChatSearch;
