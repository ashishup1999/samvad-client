import { styled } from "styled-components";
import { COLORS } from "../../../constants/CommonConstants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: ${(props) => (props.smallscreen ? "90vw" : "60vw")};
  padding: ${(props) => (props.smallscreen ? "0 10px" : "0 20%")};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const ChooseAvatarText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  flex: 1;
  padding: 10px;
  border: none;
  background: ${COLORS.BLUE_GRAD1};
  color: ${COLORS.WHITE1};
  font-family: "roboto-smvd-medium";
  border-radius: 10px;
  margin: 15px 0px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const Done = styled.img`
  height: 50px;
  width: 50px;
  background: ${COLORS.BLUE_GRAD1};
  color: ${COLORS.WHITE1};
  border-radius: 10px;
  margin: 0 0 0 10px;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const AvatarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Avatar = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 15px;
  border: 3px solid ${(props) => (props.clicked ? COLORS.BLUE1 : COLORS.WHITE1)};
`;
