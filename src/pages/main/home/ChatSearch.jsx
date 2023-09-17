import PropTypes from "prop-types";
import { COMMON_TEXTS } from "../../../constants/CommonConstants";
import { ICONS } from "../../../constants/StaticImages";
import {
  ChatSearchWrapper,
  InputField,
  InputWrapper,
  SearchIcon,
} from "./ChatSearch.styles";

const ChatSearch = ({ onChatSearch }) => {
  return (
    <>
      <ChatSearchWrapper>
        <InputWrapper>
          <InputField
            placeholder={COMMON_TEXTS.SEARCH_CHATS}
            onChange={onChatSearch}
          />
          <SearchIcon src={ICONS.searchIcon} alt="" />
        </InputWrapper>
      </ChatSearchWrapper>
    </>
  );
};

ChatSearch.propTypes = {
  onChatSearch: PropTypes.func.isRequired,
};

export default ChatSearch;
