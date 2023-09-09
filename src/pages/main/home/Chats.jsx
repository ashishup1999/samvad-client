import useChats from "../../../hooks/home/useChats";
import { ChatsWrapper } from "./Chats.styles";

const Chats = () => {
  const { fullName, allChats } = useChats();
  return (
    <ChatsWrapper>
      {fullName}
      {allChats.map((obj) => {
        console.log(obj);
        return <></>;
      })}
    </ChatsWrapper>
  );
};

export default Chats;
