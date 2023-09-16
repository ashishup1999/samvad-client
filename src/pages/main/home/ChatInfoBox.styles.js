import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const ChatInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border: 1px solid ${COLORS.BLUE1};
  background: ${(props) => (props.selected ? COLORS.BLUE2 : COLORS.WHITE1)};
  padding: 10px 20px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  display: flex;
  height: 45px;
  width: 45px;
  border-radius: 50px;
  margin-right: 15px;
  background: ${COLORS.BLUE1};
`;

export const ChatBriefInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 70px;
  padding: 13px 10px;
`;

export const UserFullName = styled.p`
  display: flex;
  font-family: "roboto-smvd-medium";
  font-size: 18px;
  color: ${COLORS.BLUE1};
`;

export const LastMessage = styled.p`
  font-size: 14px;
  color: ${COLORS.BLACK1};
  margin-left: 1px;
  font-family: "roboto-smvd-medium";
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatAdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 68px;
  padding: 13px 2px;
  margin-left: auto;
`;

export const TimeAgo = styled.p`
  display: flex;
  font-family: "roboto-smvd-medium";
  font-size: 14px;
  color: ${COLORS.BLUE1};
  margin-left: auto;
`;
