import { COMMON_TEXTS } from "../../../../constants/CommonContants";
import { ICONS } from "../../../../constants/StaticImages";
import useSearchNew from "../../../../hooks/home/useSearchNew";
import {
  PeopleSearchWrapper,
  InputField,
  InputWrapper,
  SearchIcon,
  SearchOptionWrappper,
  CreateChatButton,
  ProfileImage,
  UserFullName,
  BackToChatButton,
} from "./SearchNew.styles";

const SearchNew = () => {
  const {
    searchValue,
    searchResults,
    onChange,
    onSearch,
    onBackToChat,
    onCrateChat,
  } = useSearchNew();

  return (
    <>
      <PeopleSearchWrapper>
        <InputWrapper>
          <InputField
            placeholder={COMMON_TEXTS.SEARCH_CHATS}
            value={searchValue}
            onChange={onChange}
            onKeyUp={onSearch}
          />
          <SearchIcon src={ICONS.searchIcon} alt="" />
        </InputWrapper>
      </PeopleSearchWrapper>
      {searchResults.map((userObj) => {
        return (
          <>
            <SearchOptionWrappper>
              <ProfileImage src={userObj?.profileImg} />
              <UserFullName>{userObj?.fullName}</UserFullName>
              <CreateChatButton
                id={userObj?.username}
                src={ICONS.plusIconWhite}
                alt=""
                onClick={onCrateChat}
              />
            </SearchOptionWrappper>
          </>
        );
      })}
      <BackToChatButton
        src={ICONS.backIconWhite}
        alt="back"
        onClick={onBackToChat}
      />
    </>
  );
};

export default SearchNew;
