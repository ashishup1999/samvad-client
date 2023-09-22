import styled, { keyframes } from "styled-components";
import { AUTH_TYPE, COLORS } from "../../constants/CommonConstants";

export const LeftBg = styled.div`
  display: flex;
  flex: ${(props) => (props.fullwidth ? "1" : "0.5")};
  justify-content: ${(props) => (props.fullwidth ? "center" : "flex-end")};
  align-items: ${(props) => (props.mobilewidth ? "flex-start" : "center")};
  min-height: 100%;
  background: ${(props) => (props.mobilewidth ? COLORS.WHITE1 : COLORS.BLUE1)};
`;

export const RightBg = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-start;
  align-items: center;
  min-height: 100%;
  background: ${COLORS.WHITE1};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => (props.mobilewidth ? "90%" : "70%")};
  height: ${(props) => (props.mobilewidth ? "100%" : "75%")};
  border-radius: ${(props) => (props.fullwidth ? "20px" : "20px 0 0 20px")};
  background: ${COLORS.WHITE1};
  padding: ${(props) => (props.mobilewidth ? "1%" : "6%")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 75%;
  border-radius: 0px 20px 20px 0px;
  background: ${COLORS.BLUE1};
  padding: 2%;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const LogoHeader = styled.p`
  margin: 15px 0;
  font-size: 50px;
  font-weight: 800;
  font-family: hindi;
  color: ${COLORS.WHITE1};
`;

export const FormOptionContainer = styled.div`
  display: flex;
  height: 55px;
  min-height: 55px;
  width: 100%;
  border-radius: 8px;
  background: ${COLORS.GREY2};
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
`;

const formOptionSliderL2R = keyframes`
  0% {left:0%;}
  20% {left:10%;}
  40% {left:20%;}
  60% {left:30%;}
  80% {left:40%;}
  100% {left:50%;}
`;
const formOptionSliderR2L = keyframes`
  0% {left:50%;}
  20% {left:40%;}
  40% {left:30%;}
  60% {left:20%;}
  80% {left:10%;}
  100% {left:0%;}
`;

export const FormOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  height: 100%;
  color: ${(props) => (props.enabled ? COLORS.WHITE1 : COLORS.GREY1)};
  font-family: roboto-smvd-medium;
  font-size: 1.1em;
  position: relative;
`;

export const FormOptionSlider = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  border-radius: 8px;
  position: absolute;
  top: 0;
  background: ${COLORS.BLUE1};
  left: ${(props) => (props.authoption === AUTH_TYPE.login ? "0%" : "50%")};
  animation-duration: 250ms;
  animation-name: ${(props) =>
    props.authoption === AUTH_TYPE.login
      ? props.animate && formOptionSliderR2L
      : props.animate && formOptionSliderL2R};
  animation-timing-function: linear;
`;

export const MobileLogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 0 0 20px;
  background: ${COLORS.BLUE1};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
`;

export const MobileLogoHeader = styled.p`
  font-size: 28px;
  font-weight: 800;
  font-family: hindi;
  padding: 5px;
  color: ${COLORS.WHITE1};
`;

export const MobileLogo = styled.img`
  height: 90%;
`;
