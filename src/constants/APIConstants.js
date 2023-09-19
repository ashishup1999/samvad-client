const API_BASE_URL = import.meta.env.VITE_API_SERVER_URL;

export default {
  AUTH_USER_API: `${API_BASE_URL}/login`,
  SIGNUP_USER_API: `${API_BASE_URL}/signUp`,
  GET_EMAIL_OTP: `${API_BASE_URL}/sendVerificationCode`,
  VERIFY_OTP: `${API_BASE_URL}/verifyOtp`,
  CHANGE_PASSWORD: `${API_BASE_URL}/updatePassword`,
  GET_ALL_CHATS: `${API_BASE_URL}/getAllChats`,
  GET_USER_INFO: `${API_BASE_URL}/getUserInfo`,
  GET_CHAT_INFO_BY_CHAT_ID: `${API_BASE_URL}/getChatInfoByChatId`,
  GET_USER_ON_SEARCH: `${API_BASE_URL}/getUsersOnSearch`,
  CREATE_CHAT: `${API_BASE_URL}/createChat`,
  GET_USERNAMES_BY_CHAT_ID: `${API_BASE_URL}/getUsernamesByChatId`,
  UPDATE_SINGLE_VALUE: `${API_BASE_URL}/updateUserSingleValue`,
  UPDATE_MULTIPLE_VALUES: `${API_BASE_URL}/updateUserMultipleValues`,
  DEACTIVATE_USER: `${API_BASE_URL}/deactivateUser`,
  MARK_ALL_MSGS_SEEN: `${API_BASE_URL}/markAllMsgsSeen`,
  DELETE_MSGS:`${API_BASE_URL}/deleteMsgs`
};
