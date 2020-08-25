import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(32, 36, 39, ${props => props.filter}), rgba(32, 36, 39, ${props => props.filter}));
    img {
        width: 100%;
        height: 100vh;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
        @media (min-width: 992px) {
          object-fit: fill;
        }
    }
`;

const ImgAsBackground = (props) => {
  let filterValue;

  if (props.filter) {
    filterValue = props.filter;
  } else {
    filterValue = 0; 
  }
  

  return (
    <StyledImg filter={filterValue}>
        <img alt={props.alt} src={props.src}></img>
    </StyledImg>
  );
};

export default ImgAsBackground;