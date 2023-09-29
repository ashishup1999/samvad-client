import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const ChatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserInfoHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 75px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 18px;
  background: ${COLORS.BLUE_GRAD1};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ProfileImgBg = styled.div`
  padding: 2px;
  background: ${COLORS.WHITE1};
  margin-right: 15px;
  border-radius: 50px;
`;

export const ProfileImage = styled.img`
  display: flex;
  height: 45px;
  width: 45px;
  border-radius: 50px;
  object-fit: cover;
`;

export const UserFullName = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${COLORS.WHITE1};
`;

export const MoreOptionsIcon = styled.img`
  display: flex;
  height: 32px;
  width: auto;
  padding: 3px;
  margin-left: auto;
  cursor: pointer;
`;
