const BASE_URL = "http://localhost:3002";

export default {
  AUTH_USER_API: `${BASE_URL}/login`,
  SIGNUP_USER_API: `${BASE_URL}/signUp`,
  GET_EMAIL_OTP: `${BASE_URL}/sendVerificationCode`,
  VERIFY_OTP: `${BASE_URL}/verifyOtp`,
  CHANGE_PASSWORD: `${BASE_URL}/updatePassword`,
  GET_ALL_CHATS: `${BASE_URL}/getAllChats`,
};
