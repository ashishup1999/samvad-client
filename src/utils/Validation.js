import Regex from "./Regex";

const rules = {
  email: {
    required: {
      value: true,
      message: "Please enter an email id",
    },
    pattern: {
      value: true,
      message: "Please enter a valid email id",
    },
  },
  username_email: {
    required: {
      value: true,
      message: "Please enter an Username/ Email",
    },
  },
  username: {
    required: {
      value: true,
      message: "Please enter an Username",
    },
  },
  password: {
    required: {
      value: true,
      message: "Please enter the Password",
    },
  },
  fullname: {
    required: {
      value: true,
      message: "Please enter an Full Name",
    },
  },
};

export default rules;
