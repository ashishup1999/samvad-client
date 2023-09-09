const emailId = /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/;
const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Regex = {
  emailId,
  password,
};

export default Regex;
