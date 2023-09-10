import { COMMON_TEXTS } from "../../../constants/CommonContants";
import { ICONS } from "../../../constants/StaticImages";
import { ChatSearchWrapper, InputField, SearchIcon } from "./ChatSearch.styles";

const ChatSearch = () => {
  return (
    <>
      <ChatSearchWrapper>
        <InputField placeholder={COMMON_TEXTS.SEARCH_CHATS} />
        <SearchIcon src={ICONS.searchIcon} alt="" />
      </ChatSearchWrapper>
    </>
  );
};

export default ChatSearch;
