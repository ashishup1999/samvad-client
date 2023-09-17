import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 250px;
  padding: 10px 20px;
  background-color: ${(props) => props.bgcolor || COLORS.BLUE1};
  color: ${(props) => props.textcolor || COLORS.WHITE1};
  font-size: 18px;
  font-family: "roboto-smvd-medium";
  border-radius: 20px;
  border: 1px solid ${(props) => props.borderclr || COLORS.BLUE1};
  margin: 10px 0px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
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
`;
