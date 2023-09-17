import styled from "styled-components";
import PropTypes from "prop-types";
import Modal from "../../../../components/Modal";
import { COLORS, COMMON_TEXTS } from "../../../../constants/CommonConstants";

const DeleteAccount = (props) => {
  const {
    deleteAcc,
    usernameErr,
    enteredUsername,
    cancelDeleteAccount,
    confirmDeleteAccount,
    onChangeUsername,
  } = props;

  return (
    <Modal isModalOpen={deleteAcc}>
      <Wrapper>
        <ConfirmText>{COMMON_TEXTS.DELETE_CONFIRM}</ConfirmText>
        <TextInputBox value={enteredUsername} onChange={onChangeUsername} />
        {usernameErr && <ErrorText>{usernameErr}</ErrorText>}
        <OtherOptionWrapper>
          <OtherOptionsText
            bgcolor={COLORS.BLUE1}
            textcolor={COLORS.WHITE1}
            onClick={cancelDeleteAccount}
          >
            {COMMON_TEXTS.CANCEL}
          </OtherOptionsText>
          <OtherOptionsText
            borderclr={COLORS.RED1}
            bgcolor={COLORS.RED1}
            textcolor={COLORS.WHITE1}
            onClick={confirmDeleteAccount}
          >
            {COMMON_TEXTS.DELETE}
          </OtherOptionsText>
        </OtherOptionWrapper>
      </Wrapper>
    </Modal>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const ConfirmText = styled.p`
  font-size: 14px;
  font-family: "roboto-smvd-medium";
`;

export const ErrorText = styled.p`
  font-size: 12px;
  font-family: "roboto-smvd-medium";
  color: ${COLORS.RED1};
  margin: 1px;
`;

export const TextInputBox = styled.input`
  display: flex;
  width: 100%;
  height: 50px;
  color: ${COLORS.BLUE1};
  font-family: "roboto-smvd-medium";
  padding: 5px 20px;
  margin: 10px 0;
  border-radius: 10px;
  background: ${COLORS.WHITE1};
  border: 1px solid ${COLORS.BLUE1};
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${COLORS.GREY1};
  }
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

DeleteAccount.propTypes = {
  deleteAcc: PropTypes.string.isRequired,
  usernameErr: PropTypes.string.isRequired,
  enteredUsername: PropTypes.string.isRequired,
  cancelDeleteAccount: PropTypes.func.isRequired,
  confirmDeleteAccount: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
};

export default DeleteAccount;
