import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonContants";
import { Link } from "react-router-dom";

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
  min-width: 50%;
  border: none;
  background-color: ${COLORS.BLUE1};
  color: ${COLORS.WHITE1};
  font-family: "roboto-smvd-medium";
  font-size: 1.2em;
  border-radius: 10px;
  padding: 0 20px;
  margin: 15px 0px;
  cursor: pointer;
`;

export const ExtraOption = styled.p`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: ${COLORS.BLUE1};
  padding: 0 2px;
  margin-top: -10px;
  font-family: "roboto-smvd-medium";
  font-size: 0.9em;
`;

export const PassChangedwrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CheckIcon = styled.img`
  height: 25px;
  margin: 5px;
`;

export const PassChangedText = styled.p`
  color: ${COLORS.BLACK1};
  margin-left: 5px;
  font-family: "roboto-smvd-medium";
  font-size: 1.1em;
`;

export const GoToLoginLink = styled(Link)`
  color: ${COLORS.WHITE1};
  font-family: "roboto-smvd-medium";
  text-decoration: none;
`
