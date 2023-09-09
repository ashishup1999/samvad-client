import PropTypes from "prop-types";
import { COLORS } from "../constants/CommonContants";
import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";

const PopOver = ({ text, width = 150, height = 50 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.addEventListener("click", onOutsidePopUpClick);
  }, []);

  const refPopOver = useRef(null);

  const onOutsidePopUpClick = (e) => {
    if (!refPopOver.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <>
      {show && (
        <PopOverWrapper ref={refPopOver}>
          <PopOverContainer width={width} height={height}>
            <PopOverPointer />
            <PopOverText>{text}</PopOverText>
          </PopOverContainer>
        </PopOverWrapper>
      )}
    </>
  );
};

const PopOverWrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const PopOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height ${(props) => props.height}px;
  position: absolute;
  top: 0;
  right: -${(props) => props.width / 2}px;
`;

const PopOverPointer = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${COLORS.GREY2};
`;

const PopOverText = styled.p`
  width: 100%;
  height: 75%;
  padding: 3% 5%;
  color: ${COLORS.GREY1};
  font-size: 0.8em;
  font-family: "roboto-smvd-medium";
  background-color: ${COLORS.GREY2};
  border-radius: 10px;
`;

PopOver.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default PopOver;
