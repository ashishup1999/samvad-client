import styled from "styled-components";
import PropTypes from "prop-types";
import Modal from "../../../../components/Modal";
import { COLORS, COMMON_TEXTS } from "../../../../constants/CommonConstants";
import { useForm } from "react-hook-form";
import Input from "../../../../components/Input";
import rules from "../../../../utils/Validation";
import { updateMultipleValues } from "../../../../services/home";
import { useContext, useEffect, useState } from "react";
import { BasicDetailsContext } from "../../../../contexts/common/BasicDetailsProvider";
import Toast from "../../../../components/Toast";
import { ErrorContext } from "../../../../contexts/common/ErrorProvider";

const ChangeUserInfo = ({ isEdit, setEdit }) => {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const { dispatchError } = useContext(ErrorContext);
  const formMethods = useForm({ mode: "all" });
  const { register, getValues, formState } = formMethods;
  const { errors } = formState;
  const [changeDone, setChange] = useState();

  useEffect(() => {
    if (changeDone) {
      setTimeout(() => {
        setChange(false);
        setBasicDetails({
          payload: {
            username: getValues()?.username,
            fullName: getValues()?.fullname,
          },
        });
        if (basicDetails?.rememberMe)
          localStorage.setItem("username", getValues()?.username);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeDone]);

  const onSaveChanges = async () => {
    try {
      if (
        getValues()?.username &&
        getValues()?.fullname &&
        !(errors?.username?.message || errors?.fullname?.message)
      ) {
        const payload = {
          username: basicDetails?.username,
          updateDetails: {
            username: getValues()?.username,
            fullName: getValues()?.fullname,
          },
        };
        const res = await updateMultipleValues(payload);
        if (res?.status === COMMON_TEXTS.SUCCESS) {
          setChange(true);
          setEdit(false);
        } else {
          throw res;
        }
      }
    } catch {
      dispatchError(true);
    }
  };

  return (
    <>
      <Toast
        text={COMMON_TEXTS.CHANGES_SAVED}
        show={changeDone}
        setShow={setChange}
      />
      <Modal isModalOpen={isEdit}>
        <Wrapper>
          <Input
            type="text"
            name="fullname"
            placeholder="Full Name"
            register={register}
            rule={rules.fullname}
            errors={errors}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            register={register}
            rule={rules.username}
            errors={errors}
          />
          <OtherOptionWrapper>
            <OtherOptionsText
              bgcolor={COLORS.BLUE1}
              textcolor={COLORS.WHITE1}
              onClick={() => setEdit(false)}
            >
              {COMMON_TEXTS.CANCEL}
            </OtherOptionsText>
            <OtherOptionsText
              bgcolor={COLORS.BLUE1}
              textcolor={COLORS.WHITE1}
              onClick={onSaveChanges}
            >
              {COMMON_TEXTS.SAVE_CHANGES}
            </OtherOptionsText>
          </OtherOptionWrapper>
        </Wrapper>
      </Modal>
    </>
  );
};

export const Wrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const OtherOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const OtherOptionsText = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 48%;
  gap: 10px;
  padding: 10px 20px;
  background-color: ${(props) => props.bgcolor || COLORS.WHITE1};
  color: ${(props) => props.textcolor || COLORS.BLUE1};
  font-size: 14px;
  font-family: "roboto-smvd-medium";
  border-radius: 50px;
  border: 1px solid ${(props) => props.borderclr || COLORS.BLUE1};
  margin: 10px 0px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

ChangeUserInfo.propTypes = {
  isEdit: PropTypes.string.isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default ChangeUserInfo;
