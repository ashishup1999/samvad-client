import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";
import { Link } from "react-router-dom";

export const SuffixIcon = styled.img`
  height: 25px;
  cursor: pointer;
`;

export const PrefixIcon = styled.img`
  height: 25px;
  padding: 4px;
`;

export const ExtraOptions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0% 1%;
  margin-bottom: 30px;
`;

export const ExtraOptionText = styled.p`
  color: ${COLORS.BLACK1};
  padding: 0 2px;
  margin-left: 5px;
  font-family: "roboto-smvd-medium";
  font-size: 0.9em;
`;

export const ExtraOptionLink = styled(Link)`
  color: ${COLORS.BLUE1};
  padding: 0 2px;
  margin-left: auto;
  font-family: "roboto-smvd-medium";
  font-size: 0.9em;
  cursor: pointer;
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
  margin: 25px 0px;
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

export const OtherLoginOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 10px;
`;

export const OtherLoginOption = styled.img`
  height: 40px;
  width: 40px;
  margin: 6% 3%;
  cursor: pointer;
`;

export const OtherLoginOptionWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
