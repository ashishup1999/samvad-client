import { styled } from "styled-components";
import { COLORS } from "../../../../constants/CommonConstants";

export const ChatScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const UserInfoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 75px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  background: ${COLORS.BLUE_GRAD1};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
  cursor: pointer;
`;

export const ProfileImgBg = styled.div`
  padding: 1px;
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
  font-family: "roboto-smvd-medium";
  font-size: 18px;
  color: ${COLORS.WHITE1};
`;

export const MoreOptionsDiv = styled.div`
  display: flex;
  margin-left: auto;
`;

export const MoreOptionsIcon = styled.img`
  display: flex;
  height: 30px;
  width: auto;
  padding: ${(props) => props.padd || "3px"};
  margin: 0 5px;
  cursor: pointer;
`;

export const BackIcon = styled.img`
  display: flex;
  height: 35px;
  width: auto;
  padding: 3px;
  margin-right: 15px;
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding: 15px 0px;
  border-radius: 30px;
`;

export const SendBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  background: ${COLORS.WHITE1};
  border: 1px solid ${COLORS.BLUE1};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TextInputBox = styled.input`
  display: flex;
  flex: 1;
  min-width: 65%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 2%;
  color: ${COLORS.BLUE1};
  font-family: "roboto-smvd-medium";
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${COLORS.GREY1};
  }
`;

export const SendIcon = styled.img`
  display: flex;
  height: 35px;
  width: auto;
  padding: 5px;
  margin-left: auto;
  cursor: pointer;
  background: ${COLORS.BLUE_GRAD1};
  border-radius: 50px;
`;

export const MsgSectionDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  position: relavtive;
  bottom: 0;
`;

export const MsgBox = styled.div`
  display: flex;
`;

export const MsgBoxSender = styled.div`
  max-width: 40%;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 7px 20px 20px 20px;
  background: ${COLORS.BLUE_GRAD1};
  color: ${COLORS.WHITE1};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 3px;
  cursor: pointer;
  margin-left: auto;
  font-family: "roboto-smvd-medium";
  word-wrap: break-word;
`;

export const MsgBoxOthers = styled.div`
  max-width: 40%;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 20px 7px 20px 20px;
  background: ${COLORS.WHITE1};
  border: 1px solid ${COLORS.BLUE1};
  color: ${COLORS.BLUE1};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 3px;
  cursor: pointer;
  margin-right: auto;
  font-family: "roboto-smvd-medium";
  word-wrap: break-word;
`;

export const TimeRight = styled.p`
  max-width: 40%;
  width: fit-content;
  border-radius: 20px;
  color: ${COLORS.GREY1};
  margin: 3px 15px 10px auto;
  font-family: "roboto-smvd-medium";
  font-size: 10px;
  word-wrap: break-word;
`;

export const TimeLeft = styled.p`
  max-width: 40%;
  width: fit-content;
  border-radius: 20px;
  color: ${COLORS.GREY1};
  margin: 3px auto 10px 15px;
  font-family: "roboto-smvd-medium";
  font-size: 10px;
  word-wrap: break-word;
`;

export const CheckBox = styled.input`
  appearance: none;
  outline: 1px solid ${COLORS.BLUE1};
  border-radius: 2px;
  width: 15px;
  height: 15px;
  place-content: center;
  margin: auto 5px;
  cursor: pointer;
  &:checked {
    background: ${COLORS.BLUE_GRAD1};
    box-shadow: inset 0px 0px 0px 2px ${COLORS.WHITE1};
  }
`;
