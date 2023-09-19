import { useContext } from "react";
import { COLORS, COMMON_TEXTS } from "../../../../constants/CommonConstants";
import {
  EditImg,
  EditImgDiv,
  EditInfoImg,
  OtherOptionsText,
  SettingsText,
  UserFullName,
  UserImage,
  UserImageDiv,
  UserName,
  Wrapper,
} from "./Settings.styles";
import { BasicDetailsContext } from "../../../../contexts/common/BasicDetailsProvider";
import { AVATARS, ICONS } from "../../../../constants/StaticImages";
import useSettings from "../../../../hooks/home/useSettings";
import ChooseAvatar from "../../../auth/signup/ChooseAvatar";
import DeactivateAccount from "./DeactivateAccount";
import ChangeUserInfo from "./ChangeUserInfo";
import Modal from "../../../../components/Modal";
import ForgotPasswordForm from "../../../auth/forgotPassword";

const Settings = () => {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { profileImg, fullName, username } = basicDetails;
  const {
    selectedAvatar,
    chooseAvatar,
    deleteAcc,
    usernameErr,
    enteredUsername,
    editUserInfo,
    editPassword,
    onBack,
    onLogOut,
    onEditProfileImg,
    onAvatarSelection,
    changeAvatar,
    onClickDeleteAcc,
    cancelDeactivateAccount,
    confirmDeactivateAccount,
    onChangeUsername,
    setEditUserInfo,
    setEditPassword,
    closeAvatarModal,
  } = useSettings();

  return (
    <Wrapper>
      <SettingsText>{COMMON_TEXTS.SETTINGS}</SettingsText>
      <UserImageDiv>
        <UserImage src={AVATARS[profileImg]} />
        <EditImgDiv onClick={onEditProfileImg}>
          <EditImg src={ICONS.userImgEdit} />
        </EditImgDiv>
      </UserImageDiv>
      <UserFullName>{fullName}</UserFullName>
      <UserName>{username}</UserName>
      <EditInfoImg
        src={ICONS.userInfoEdit}
        onClick={() => setEditUserInfo(true)}
      />
      <OtherOptionsText onClick={() => setEditPassword(true)}>
        {COMMON_TEXTS.CHANGE_PASSWORD}
      </OtherOptionsText>
      <OtherOptionsText
        borderclr={COLORS.RED1}
        textcolor={COLORS.RED1}
        onClick={onClickDeleteAcc}
      >
        {COMMON_TEXTS.DEACTIVATE_ACCOUNT}
      </OtherOptionsText>
      <OtherOptionsText
        bgcolor={COLORS.BLUE1}
        textcolor={COLORS.WHITE1}
        onClick={onLogOut}
      >
        {COMMON_TEXTS.LOG_OUT}
      </OtherOptionsText>
      <OtherOptionsText
        bgcolor={COLORS.BLUE1}
        textcolor={COLORS.WHITE1}
        onClick={onBack}
      >
        {COMMON_TEXTS.BACK}
      </OtherOptionsText>
      <ChooseAvatar
        chooseAvatar={chooseAvatar}
        selectedAvatar={selectedAvatar}
        onAvatarSelection={onAvatarSelection}
        onUserCheckClick={changeAvatar}
        isClosable
        closeModal={closeAvatarModal}
      />
      <DeactivateAccount
        {...{
          deleteAcc,
          usernameErr,
          enteredUsername,
          cancelDeactivateAccount,
          confirmDeactivateAccount,
          onChangeUsername,
        }}
      />
      <ChangeUserInfo isEdit={editUserInfo} setEdit={setEditUserInfo} />
      <Modal isModalOpen={editPassword}>
        <ForgotPasswordForm isEditAfterAuth setModalFalse={setEditPassword} />
      </Modal>
    </Wrapper>
  );
};

export default Settings;
