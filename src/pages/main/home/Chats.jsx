import { ICONS } from "../../../constants/StaticImages";
import useChats from "../../../hooks/home/useChats";
import ChatInfoBox from "./ChatInfoBox";
import ChatSearch from "./ChatSearch";
import {
  ChatsWrapper,
  MoreOptionsIcon,
  ProfileImage,
  UserFullName,
  UserInfoHeader,
} from "./Chats.styles";

const Chats = () => {
  const { fullName, allChats, onSettingsClick } = useChats();
  return (
    <ChatsWrapper>
      <UserInfoHeader>
        <ProfileImage src="x.png" alt="" />
        <UserFullName>{fullName}</UserFullName>
        <MoreOptionsIcon
          src={ICONS.settingsWhite}
          alt=""
          onClick={onSettingsClick}
        />
      </UserInfoHeader>
      <ChatSearch />
      {allChats.map((obj) => {
        return <ChatInfoBox key={obj?.chatId} {...obj} />;
      })}
    </ChatsWrapper>
  );
};

export default Chats;
