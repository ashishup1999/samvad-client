import { useForm } from "react-hook-form";
import Checkbox from "../../../components/Checkbox";
import { ICONS } from "../../../constants/StaticImages";
import useLogin from "../../../hooks/auth/useLogin";
import {
  Button,
  ExtraOptionLink,
  ExtraOptionText,
  ExtraOptions,
  PrefixIcon,
  SuffixIcon,
} from "./index.styles";
import rules from "../../../utils/Validation";
import Input from "../../../components/Input";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/AuthProvider";

const LoginForm = () => {
  const formMethods = useForm({ mode: "all" });
  const { register, getValues, formState } = formMethods;
  const { errors } = formState;
  const { setAuthState } = useContext(AuthContext);
  const { showPassword, rememberMe, onEyeClick, onRememberMe, onLogin } =
    useLogin({
      getValues,
      setAuthState,
    });

  return (
    <>
      <Input
        type="text"
        name="username_email"
        placeholder="Username/ Email"
        prefix={<PrefixIcon src={ICONS.userIcon} />}
        register={register}
        rule={rules.username_email}
        errors={errors}
      />
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        register={register}
        rule={rules.password}
        errors={errors}
        prefix={<PrefixIcon src={ICONS.lockIcon} />}
        suffix={
          <SuffixIcon
            src={showPassword ? ICONS.eyeOffIcon : ICONS.eyeOnIcon}
            onClick={onEyeClick}
          />
        }
      />
      <ExtraOptions>
        <Checkbox size={22} isChecked={rememberMe} onClick={onRememberMe} />
        <ExtraOptionText>Remember me</ExtraOptionText>
        <ExtraOptionLink to="/auth/forgot-password">
          forgot password?
        </ExtraOptionLink>
      </ExtraOptions>
      <Button onClick={onLogin}>Login</Button>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
