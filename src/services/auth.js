import APIConstants from "../constants/APIConstants";
import { ajaxApi } from "../utils/ApiUtils";

export const authenticateUser = async (payload) => {
  return ajaxApi.post(APIConstants.AUTH_USER_API, payload);
};

export const signUpUser = async (payload) => {
  return ajaxApi.post(APIConstants.SIGNUP_USER_API, payload);
};

export const getEmailOtp = async (payload) => {
  return ajaxApi.post(APIConstants.GET_EMAIL_OTP, payload);
};

export const verifyOtp = async (payload) => {
  return ajaxApi.post(APIConstants.VERIFY_OTP, payload);
};

export const changePassword = async (payload) => {
  return ajaxApi.post(APIConstants.CHANGE_PASSWORD, payload);
};
