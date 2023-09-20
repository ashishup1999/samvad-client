import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { defaultStateReducer } from "../../utils/CommonUtils";
import { Portal } from "react-portal";
import styled from "styled-components";
import { COLORS, COMMON_TEXTS } from "../../constants/CommonConstants";
import { IMAGES } from "../../constants/StaticImages";

export const ErrorContext = createContext();

const initialState = {
  errorState: false,
};

const ErrorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { errorState } = state;

  const dispatchError = (val) => {
    dispatch({ payload: { errorState: val } });
  };

  return (
    <>
      <ErrorContext.Provider value={{ dispatchError }}>
        {errorState && (
          <Portal node={document.querySelector(".app")}>
            <>
              <Wrapper>
                <ErrorText>{COMMON_TEXTS.ERROR_MSG}</ErrorText>
                <ErrorLogo src={IMAGES.errLogo} />
              </Wrapper>
            </>
          </Portal>
        )}
        {children}
      </ErrorContext.Provider>
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
  background: ${COLORS.BLUE1};
  gap: 35px;
  position: fixed;
`;

export const ErrorText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: "roboto-smvd-medium";
  color: ${COLORS.WHITE1};
  text-align: center;
`;

export const ErrorLogo = styled.img`
  height: 300px;
  width: auto;
`;

ErrorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorProvider;
