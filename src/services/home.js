import APIConstants from "../constants/APIConstants";
import { ajaxApi } from "../utils/ApiUtils";

export const getUserAllChats = async (username) => {
  return ajaxApi.get(`${APIConstants.GET_ALL_CHATS}/${username}`);
};
