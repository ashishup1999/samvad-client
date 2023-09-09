import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Divider from "../../../components/Divider";
import Input from "../../../components/Input";
import { COLORS } from "../../../constants/CommonContants";
import { ICONS } from "../../../constants/StaticImages";
import {
  Button,
  DividerContainer,
  Or,
  OtherSignUpOption,
  OtherSignUpOptionContainer,
  PrefixIcon,
} from "./index.styles";
import rules from "../../../utils/Validation";
import useSignUp from "../../../hooks/auth/useSignUp";

const SignupForm = ({ onOptionChange }) => {
  const formMethods = useForm({ mode: "all" });
  const { register, getValues, formState } = formMethods;
  const { errors } = formState;
  const { onSignUp } = useSignUp({ getValues, onOptionChange });

  return (
    <>
      <Input
        type="text"
        name="fullname"
        placeholder="Full Name"
        prefix={<PrefixIcon src={ICONS.userIcon} />}
        register={register}
        rule={rules.fullname}
        errors={errors}
      />
      <Input
        type="text"
        name="email"
        placeholder="Email"
        prefix={<PrefixIcon src={ICONS.mailIcon} />}
        register={register}
        rule={rules.email}
        errors={errors}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        prefix={<PrefixIcon src={ICONS.atIcon} />}
        register={register}
        rule={rules.username}
        errors={errors}
      />
      <Input
        type="text"
        name="password"
        placeholder="Password"
        prefix={<PrefixIcon src={ICONS.lockIcon} />}
        register={register}
        rule={rules.password}
        errors={errors}
      />
      <Button onClick={onSignUp}>Sign Up</Button>
      <DividerContainer>
        <Divider width="30%" color={COLORS.GREY2} />
        <Or>or</Or>
        <Divider width="30%" color={COLORS.GREY2} />
      </DividerContainer>
      <OtherSignUpOptionContainer>
        <OtherSignUpOption src={ICONS.googleIcon} />
        <OtherSignUpOption src={ICONS.facebookIcon} />
        <OtherSignUpOption src={ICONS.appleIcon} />
      </OtherSignUpOptionContainer>
    </>
  );
};

SignupForm.propTypes = {
  onOptionChange: PropTypes.func.isRequired,
};

export default SignupForm;
