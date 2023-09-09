import { styled } from "styled-components";
import { COLORS } from "../../constants/CommonContants";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  background: ${COLORS.WHITE1};
`;

export const Logo = styled.img`
  width: 100%;
  padding: 15% 0;
  filter: drop-shadow(2px 2px 4px grey);
`;
