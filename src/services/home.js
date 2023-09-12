import APIConstants from "../constants/APIConstants";
import { ajaxApi } from "../utils/ApiUtils";

export const getUserAllChats = async (username) => {
  return ajaxApi.get(`${APIConstants.GET_ALL_CHATS}/${username}`);
};

export const getUserInfo = async (username) => {
  return ajaxApi.get(`${APIConstants.GET_USER_INFO}/${username}`);
};

export const getChatInfoByChatId = async (username, chatId) => {
  return ajaxApi.get(
    `${APIConstants.GET_CHAT_INFO_BY_CHAT_ID}/${username}?chatId=${chatId}`
  );
};
