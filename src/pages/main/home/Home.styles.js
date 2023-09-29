import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.mobilewidth ? "0" : "20px")};
  background: ${(props) =>
    props.tabletwidth ? COLORS.BLUE_GRAD1 : COLORS.WHITE1};
  gap: 20px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => {
    if (!(props.mobilewidth || props.tabletwidth)) return "0.38";
    else if (props.tabletwidth) return "0.9";
    else return "1";
  }};
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: ${(props) =>
    props.mobilewidth || props.tabletwidth ? "15px 10px 0" : "20px"};
  background-color: ${COLORS.WHITE1};
  position: relative;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.62;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 10px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: ${COLORS.BLUE_GRAD1};
`;

export const LogoImage = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;

export const LogoFooterText = styled.p`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${COLORS.WHITE1};
`;

export const CreateChatButton = styled.img`
  display: flex;
  height: 45px;
  width: auto;
  padding: 10px;
  margin: 0 20px 30px auto;
  cursor: pointer;
  background: ${COLORS.BLUE_GRAD1};
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
