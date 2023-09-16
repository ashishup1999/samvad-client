import { styled } from "styled-components";
import { COLORS } from "../constants/CommonConstants";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 2% 3%;
  background: ${COLORS.GREY2};
  border-radius: 5px;
  margin-bottom: 20px;
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

export const ValidationErr = styled.p`
  width: 100%;
  padding: 0 2%;
  margin: -15px auto 10px 0;
  color: ${COLORS.RED1};
  font-family: "roboto-smvd-medium";
  font-size: 0.8em;
`;
