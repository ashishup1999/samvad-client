import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const SuffixIcon = styled.img`
  height: 100%;
  padding: 6px;
  cursor: pointer;
`;

export const PrefixIcon = styled.img`
  height: 100%;
  padding: 4px;
`;

export const Button = styled.button`
  height: 50px;
  min-height: 55px;
  width: 50%;
  border: none;
  background-color: ${COLORS.BLUE1};
  color: ${COLORS.WHITE1};
  font-family: "roboto-smvd-medium";
  font-size: 1.2em;
  border-radius: 10px;
  margin: 15px 0px;
  cursor: pointer;
`;

export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
`;

export const Or = styled.p`
  padding: 0 2%;
  color: ${COLORS.GREY1};
  font-family: "roboto-smvd-medium";
`;

export const OtherSignUpOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const OtherSignUpOption = styled.img`
  height: 40px;
  width: 40px;
  margin: 4% 3%;
  cursor: pointer;
`;
