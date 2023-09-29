import ProfileCard from "../../../../components/ProfileCard";
import { COMMON_TEXTS } from "../../../../constants/CommonConstants";
import { AVATARS, ICONS } from "../../../../constants/StaticImages";
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
  ProfileImgBg,
} from "./SearchNew.styles";

const SearchNew = () => {
  const {
    searchValue,
    searchResults,
    profileCard,
    onChange,
    onSearch,
    onBackToChat,
    onCrateChat,
    toggleProfileCard,
  } = useSearchNew();

  return (
    <>
      <PeopleSearchWrapper>
        <InputWrapper>
          <InputField
            placeholder={COMMON_TEXTS.SEARCH_PEOPLE}
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
              <ProfileImgBg>
                <ProfileImage
                  src={AVATARS[userObj?.profileImg]}
                  alt=""
                  onClick={() =>
                    toggleProfileCard({
                      username: userObj?.username,
                      fullName: userObj?.fullName,
                      profileImg: userObj?.profileImg,
                    })
                  }
                />
              </ProfileImgBg>
              <UserFullName>{userObj?.fullName}</UserFullName>
              <CreateChatButton
                id={userObj?.username}
                src={ICONS.plusIconWhite}
                alt=""
                onClick={onCrateChat}
              />
              <ProfileCard
                isCardOpen={profileCard}
                {...profileCard}
                closeModal={() => toggleProfileCard(null)}
                onCreateChat={() => {
                  onCrateChat({ currentTarget: { id: userObj?.username } });
                  toggleProfileCard(null);
                }}
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
