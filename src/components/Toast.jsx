import PropTypes from "prop-types";
import { Portal } from "react-portal";
import styled from "styled-components";
import { COLORS } from "../constants/CommonConstants";

const Toast = ({
  text,
  bgColor = COLORS.WHITE1,
  borderColor = COLORS.BLUE1,
  textColor = COLORS.BLUE1,
  show,
  setShow,
}) => {
  return (
    <>
      {show && (
        <Portal node={document.body}>
          <ToastWrapper onClick={() => setShow(false)}>
            <ToastMsg
              color={textColor}
              bgcolor={bgColor}
              borderclr={borderColor}
            >
              {text}
            </ToastMsg>
          </ToastWrapper>
        </Portal>
      )}
    </>
  );
};

const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${COLORS.BLUE2}1f;
  z-index: 1;
  top: 0;
`;

const ToastMsg = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 10px;
  border: 2px solid ${(props) => props.borderclr};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  font-family: "roboto-smvd-medium";
  border-radius: 10px;
  margin: 25px 0px 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;

Toast.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Toast;
