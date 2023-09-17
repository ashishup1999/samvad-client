import { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/Modal";
import { ScreenSizeContext } from "../../../contexts/common/ScreenSizeProvider";
import {
  Avatar,
  AvatarContainer,
  ChooseAvatarText,
  Done,
  Header,
  Wrapper,
} from "./ChooseAvatar.styles";
import { COMMON_TEXTS } from "../../../constants/CommonConstants";
import { AVATARS, ICONS } from "../../../constants/StaticImages";

const ChooseAvatar = ({
  chooseAvatar,
  selectedAvatar,
  onUserCheckClick,
  onAvatarSelection,
  isClosable,
  closeModal,
}) => {
  const { mobileMax, tabletMax } = useContext(ScreenSizeContext);
  const isSmallScreen = mobileMax || tabletMax;

  return (
    <>
      <Modal isModalOpen={chooseAvatar}>
        <Wrapper smallscreen={isSmallScreen}>
          <Header>
            <ChooseAvatarText>{COMMON_TEXTS.CHOOSE_AN_AVATAR}</ChooseAvatarText>
            <Done
              src={ICONS.userCheck}
              alt="choose_avatar"
              onClick={onUserCheckClick}
            />
            {isClosable && (
              <Done
                src={ICONS.backIconWhite}
                alt="back_button"
                onClick={closeModal}
              />
            )}
          </Header>
          <AvatarContainer>
            {Object.keys(AVATARS).map((key) => {
              return (
                <Avatar
                  key={key}
                  data-testid={key}
                  src={AVATARS[key]}
                  clicked={selectedAvatar === key}
                  onClick={onAvatarSelection}
                />
              );
            })}
          </AvatarContainer>
        </Wrapper>
      </Modal>
    </>
  );
};

ChooseAvatar.defaultProps = {
  isClosable: false,
  closeModal: () => {},
};

ChooseAvatar.propTypes = {
  chooseAvatar: PropTypes.string.isRequired,
  selectedAvatar: PropTypes.string.isRequired,
  onUserCheckClick: PropTypes.func.isRequired,
  onAvatarSelection: PropTypes.func.isRequired,
  isClosable: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ChooseAvatar;
