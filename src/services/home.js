import APIConstants from "../constants/APIConstants";
import { ajaxApi } from "../utils/ApiUtils";

export const getUserAllChats = async (username) => {
  return ajaxApi.get(`${APIConstants.GET_ALL_CHATS}/${username}`);
};

export const getUserInfo = async (username) => {
  return ajaxApi.get(`${APIConstants.GET_USER_INFO}/${username}`);
};

export const getChatInfoByChatId = async (username, chatId, pageNo) => {
  return ajaxApi.get(
    `${APIConstants.GET_CHAT_INFO_BY_CHAT_ID}/${username}?chatId=${chatId}&pageNo=${pageNo}`
  );
};

export const getUsersOnSearch = async (username, searchKey) => {
  return ajaxApi.get(
    `${APIConstants.GET_USER_ON_SEARCH}/${username}?search=${searchKey}`
  );
};

export const getUsernamesByChatId = async (chatId) => {
  return ajaxApi.get(`${APIConstants.GET_USERNAMES_BY_CHAT_ID}/${chatId}`);
};

export const createChat = async (payload) => {
  return ajaxApi.post(`${APIConstants.CREATE_CHAT}`, payload);
};

export const updateSingleValue = async (payload) => {
  return ajaxApi.post(`${APIConstants.UPDATE_SINGLE_VALUE}`, payload);
};

export const updateMultipleValues = async (payload) => {
  return ajaxApi.post(`${APIConstants.UPDATE_MULTIPLE_VALUES}`, payload);
};

export const deleteUser = async (username) => {
  return ajaxApi.get(`${APIConstants.DELETE_USER}/${username}`);
};

export const markAllMsgsSeen = async (username, chatId) => {
  return ajaxApi.get(
    `${APIConstants.MARK_ALL_MSGS_SEEN}/${username}?chatId=${chatId}`
  );
};
