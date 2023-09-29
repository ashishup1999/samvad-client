import { styled } from "styled-components";
import { COLORS } from "../../../../constants/CommonConstants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SettingsText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;
  padding: 10px;
  border: none;
  background: ${COLORS.BLUE_GRAD1};
  color: ${COLORS.WHITE1};
  font-size: 22px;
  font-family: "roboto-smvd-medium";
  border-radius: 10px;
  margin: 15px 0px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
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

export const EditImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
  background: ${COLORS.GREY2}df;
`;

export const EditImg = styled.img`
  height: 20px;
`;

export const UserFullName = styled.p`
  display: flex;
  font-family: "roboto-smvd-medium";
  font-size: 18px;
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

export const EditInfoImg = styled.img`
  height: 18px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const OtherOptionsText = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 250px;
  padding: 10px 20px;
  background: ${(props) => props.bgcolor || COLORS.WHITE1};
  color: ${(props) => props.textcolor || COLORS.BLUE1};
  font-size: 18px;
  font-family: "roboto-smvd-medium";
  border-radius: 20px;
  border: 1px solid ${(props) => props.borderclr || COLORS.BLUE1};
  margin: 10px 0px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
