import React from "react";
import styled from "styled-components";

import JosLogo from "../../assets/images/Jos.svg"


const StyledLogo = styled.div`
    width: 142px;
    height: 142px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const Logo = props => {

    return(
        <StyledLogo>
            <img src={JosLogo} alt="logo"></img>
        </StyledLogo>
    )
}

export default Logo; 