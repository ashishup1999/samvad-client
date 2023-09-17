import PropTypes from "prop-types";
import { Portal } from "react-portal";
import { ModalBg, ModalWrapper } from "./Modal.styles";

const Modal = ({ children, isModalOpen = true }) => {
  return (
    <>
      {isModalOpen && (
        <Portal node={document.body}>
          <ModalBg>
            <ModalWrapper>{children}</ModalWrapper>
          </ModalBg>
        </Portal>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default Modal;
