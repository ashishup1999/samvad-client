import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const SuffixIcon = styled.img`
  height: 25px;
  padding: 4px;
  cursor: pointer;
`;

export const PrefixIcon = styled.img`
  height: 25px;
  padding: 4px;
`;

export const Button = styled.button`
  height: 50px;
  min-height: 55px;
  width: 50%;
  border: none;
  background: ${COLORS.BLUE_GRAD1};
  color: ${COLORS.WHITE1};
  font-family: "roboto-smvd-medium";
  font-size: 1.2em;
  border-radius: 10px;
  margin: 15px 0px;
  cursor: pointer;
`;
