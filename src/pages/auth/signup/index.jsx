import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { COMMON_TEXTS } from "../../../constants/CommonConstants";
import { ICONS } from "../../../constants/StaticImages";
import { Button, PrefixIcon } from "./index.styles";
import rules from "../../../utils/Validation";
import useSignUp from "../../../hooks/auth/useSignUp";
import ChooseAvatar from "./ChooseAvatar";
import Toast from "../../../components/Toast";

const SignupForm = ({ onOptionChange }) => {
  const formMethods = useForm({ mode: "all" });
  const { register, getValues, formState } = formMethods;
  const { errors } = formState;
  const {
    selectedAvatar,
    chooseAvatar,
    showSignUpToast,
    onAvatarSelection,
    onUserCheckClick,
    onSignUp,
    setShowSignUpToast,
  } = useSignUp({ getValues, onOptionChange });

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
      <Button onClick={onSignUp}>{COMMON_TEXTS.SIGNUP}</Button>
      {chooseAvatar && (
        <ChooseAvatar
          chooseAvatar={chooseAvatar}
          selectedAvatar={selectedAvatar}
          onUserCheckClick={onUserCheckClick}
          onAvatarSelection={onAvatarSelection}
        />
      )}
      <Toast
        text={COMMON_TEXTS.SIGNED_UP}
        show={showSignUpToast}
        setShow={setShowSignUpToast}
      />
    </>
  );
};

SignupForm.propTypes = {
  onOptionChange: PropTypes.func.isRequired,
};

export default SignupForm;
