import ProfileCard from "../../../components/ProfileCard";
import { AVATARS, ICONS } from "../../../constants/StaticImages";
import useChats from "../../../hooks/home/useChats";
import ChatInfoBox from "./ChatInfoBox";
import ChatSearch from "./ChatSearch";
import {
  ChatsWrapper,
  MoreOptionsIcon,
  ProfileImage,
  ProfileImgBg,
  UserFullName,
  UserInfoHeader,
} from "./Chats.styles";

const Chats = () => {
  const {
    username,
    fullName,
    profileImg,
    allChats,
    profileCard,
    onSettingsClick,
    onChatSearch,
    toggleProfileCard,
  } = useChats();

  return (
    <>
      <ChatsWrapper>
        <UserInfoHeader>
          <ProfileImgBg>
            <ProfileImage
              src={AVATARS[profileImg]}
              alt=""
              onClick={() =>
                toggleProfileCard({ username, fullName, profileImg })
              }
            />
          </ProfileImgBg>
          <UserFullName>{fullName}</UserFullName>
          <MoreOptionsIcon
            src={ICONS.settingsWhite}
            alt=""
            onClick={onSettingsClick}
          />
        </UserInfoHeader>
        <ChatSearch onChatSearch={onChatSearch} />
        {allChats.map((obj) => {
          return <ChatInfoBox key={obj?.chatId} {...obj} />;
        })}
      </ChatsWrapper>
      <ProfileCard
        isCardOpen={profileCard}
        {...profileCard}
        closeModal={() => toggleProfileCard(null)}
      />
    </>
  );
};

export default Chats;
