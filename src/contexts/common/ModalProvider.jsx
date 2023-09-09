import { createContext } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import useModal from "../../hooks/common/useModal";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const { isModalWrapperEnabled, modalWrapperSwitch } = useModal();
  return (
    <ModalContext.Provider
      value={{ isModalWrapperEnabled, modalWrapperSwitch }}
    >
      {children}
      {isModalWrapperEnabled && <ModalWrapper onClick={modalWrapperSwitch} />}
    </ModalContext.Provider>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 2;
`;

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalProvider;
