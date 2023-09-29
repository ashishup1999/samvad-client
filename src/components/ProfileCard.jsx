import PropTypes from "prop-types";
import Modal from "./Modal";
import styled from "styled-components";
import { COLORS } from "../constants/CommonConstants";
import { AVATARS, ICONS } from "../constants/StaticImages";

const ProfileCard = ({
  isCardOpen,
  profileImg,
  fullName,
  username,
  closeModal,
  onCreateChat,
}) => {
  return (
    <>
      <Modal isModalOpen={isCardOpen}>
        <Wrapper>
          <UserImageDiv>
            <UserImage src={AVATARS[profileImg]} />
          </UserImageDiv>
          <UserFullName>{fullName}</UserFullName>
          <UserName>{username}</UserName>
          <OptionsSec>
            {onCreateChat && (
              <CreateChatButton
                src={ICONS.plusIconWhite}
                alt=""
                onClick={onCreateChat}
              />
            )}
            <CreateChatButton
              src={ICONS.backIconWhite}
              alt=""
              onClick={closeModal}
            />
          </OptionsSec>
        </Wrapper>
      </Modal>
    </>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const UserImageDiv = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 2px solid ${COLORS.BLUE1};
  border-radius: 200px;
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserFullName = styled.p`
  display: flex;
  font-family: "roboto-smvd-medium";
  font-size: 20px;
  color: ${COLORS.BLUE1};
  margin: 15px 0 2px;
`;

export const UserName = styled.p`
  display: flex;
  font-family: "roboto-smvd-medium";
  font-size: 15px;
  color: ${COLORS.BLACK1};
  margin-bottom: 10px;
`;

export const OptionsSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const CreateChatButton = styled.img`
  display: flex;
  height: 45px;
  width: auto;
  padding: 10px;
  cursor: pointer;
  background: ${COLORS.BLUE_GRAD1};
  border-radius: 50px;
`;

ProfileCard.propTypes = {
  isCardOpen: PropTypes.bool.isRequired,
  profileImg: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  onCreateChat: PropTypes.func.isRequired,
};

export default ProfileCard;
