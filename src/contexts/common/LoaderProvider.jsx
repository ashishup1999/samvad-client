import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { Portal } from "react-portal";
import styled, { keyframes } from "styled-components";
import { COLORS, COMMON_TEXTS } from "../../constants/CommonConstants";
import { IMAGES } from "../../constants/StaticImages";

export const LoaderContext = createContext();

const initialState = {
  loaderState: false,
};

const LoaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { loaderState } = state;

  const dispatchLoader = (val) => {
    dispatch({ payload: { loaderState: val } });
  };

  return (
    <>
      <LoaderContext.Provider value={{ dispatchLoader }}>
        {loaderState && (
          <Portal node={document.querySelector(".app")}>
            <>
              <Wrapper>
                <LoaderText>{COMMON_TEXTS.WAIT_MSG}</LoaderText>
                <Loader src={IMAGES.loader} />
              </Wrapper>
            </>
          </Portal>
        )}
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: ${COLORS.BLUE_GRAD1};
  gap: 35px;
  position: fixed;
`;

export const LoaderAnimation = keyframes`
  0%   {transform: rotate(0deg);translate: 0px;}
  25%  {transform: rotate(90deg); translate: -60px;}
  50%  {transform: rotate(180deg); translate: 0px;}
  75%  {transform: rotate(270deg); translate: 60px;}
  100% {transform: rotate(360deg); translate: 0px;}
`;

export const LoaderText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: "roboto-smvd-medium";
  color: ${COLORS.WHITE1};
  text-align: center;
  margin-bottom: 20px;
`;

export const Loader = styled.img`
  height: 300px;
  width: auto;
  animation-name: ${LoaderAnimation};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

LoaderProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoaderProvider;
