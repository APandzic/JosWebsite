import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(32, 36, 39, 0.1), rgba(32, 36, 39, 0.1));
    img {
        width: 100%;
        height: 100vh;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;

const ImgAsBackground = (props) => {
  return (
    <StyledImg>
        <img alt={props.alt} src={props.src}></img>
    </StyledImg>
  );
};

export default ImgAsBackground;