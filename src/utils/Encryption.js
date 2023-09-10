import CryptoJS from "crypto-js";

const encryptionKey = import.meta.env.VITE_ENCRYPTION_SECRET_KEY;

export const encryptData = (value) => {
  return CryptoJS.AES.encrypt(value, encryptionKey).toString();
};

export const decryptData = (value) => {
  return CryptoJS.AES.decrypt(value, encryptionKey).toString(CryptoJS.enc.Utf8);
};
