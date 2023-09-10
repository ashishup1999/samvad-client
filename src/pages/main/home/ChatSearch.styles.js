import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonContants";

export const ChatSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid ${COLORS.BLUE1};
  background: ${COLORS.WHITE1};
  padding: 5px 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 15px;
`;

export const SearchIcon = styled.img`
  display: flex;
  height: 35px;
  width: auto;
  padding: 5px;
  margin-left: auto;
`;

export const InputField = styled.input`
  display: flex;
  flex: 1;
  min-width: 65%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 2%;
  color: ${COLORS.BLUE1};
  font-family: "roboto-smvd-medium";
  font-size: 1.1em;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${COLORS.GREY1};
  }
`;