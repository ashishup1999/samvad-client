import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const ChatInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  border: 1px solid ${COLORS.BLUE1};
  background: ${(props) => (props.selected ? COLORS.BLUE2 : COLORS.WHITE1)};
  padding: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  overflow: hidden;
`;

export const ProfileImgBg = styled.div`
  padding: 1px;
  background: ${COLORS.BLUE_GRAD1};
  margin: 0 3px;
  border-radius: 50px;
`;

export const ProfileImage = styled.img`
  display: flex;
  width: 45px;
  aspect-ratio: 1;
  border-radius: 50px;
  object-fit: cover;
`;

export const ChatBriefInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  min-height: 64px;
  padding: 13px 10px;
`;

export const UserFullName = styled.p`
  display: flex;
  font-family: "roboto-smvd-medium";
  font-size: 14px;
  color: ${COLORS.BLUE1};
`;

export const LastMessageBy = styled.span`
  width: fit-content;
  font-size: 12px;
  color: ${COLORS.GREY1};
  font-family: "roboto-smvd-medium";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const LastMessage = styled.span`
  font-size: 12px;
  color: ${COLORS.BLACK1};
  margin-left: 1px;
  font-family: ${(props) =>
    props.seen ? "roboto-smvd-light" : "roboto-smvd-medium"};
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatAdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 25%;
  height: 68px;
  padding: 13px 2px;
  margin-left: auto;
`;

export const TimeAgo = styled.p`
  font-family: "roboto-smvd-medium";
  max-width: 100%;
  font-size: 10px;
  color: ${COLORS.BLUE1};
  margin-left: auto;
  overflow-wrap: break-all;
`;

export const NewMsgDot = styled.div`
  width: 10px;
  height: 12px;
  background: ${COLORS.BLUE_GRAD1};
  border-radius: 10px;
  margin-left: auto;
  margin-right: 3px;
`;
