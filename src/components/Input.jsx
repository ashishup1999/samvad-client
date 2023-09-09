import PropTypes from "prop-types";
import { InputField, InputWrapper, ValidationErr } from "./Input.styles";

const Input = (props) => {
  const { type, name, placeholder, prefix, suffix, register, rule, errors } =
    props;
  return (
    <>
      <InputWrapper>
        {prefix}
        <InputField
          type={type}
          placeholder={placeholder}
          {...register(name, rule)}
        />
        {suffix}
      </InputWrapper>
      {errors[name]?.message && (
        <ValidationErr>{errors[name]?.message}</ValidationErr>
      )}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
  register: PropTypes.func,
  rule: PropTypes.objectOf(PropTypes.object),
  errors: PropTypes.objectOf(PropTypes.object),
};

export default Input;
