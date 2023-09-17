import { styled } from "styled-components";
import { COLORS } from "../constants/CommonConstants";

export const ModalBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${COLORS.BLUE2}2f;
  z-index: 1;
  top: 0;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  padding: 15px;
  border-radius: 15px;
  background: ${COLORS.WHITE1};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;
