import React from "react";
import styled from "styled-components";

import { Link } from "@reach/router";
import Button from "../Button";

const StyledNav = styled.div`
  display: flex;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;

  a {
    padding: 10px;
    color: black;
  }

  a:hover {
    color: cornflowerblue;
  }

  ${(props) =>
    props.open &&
    `
    nav {
        opacity: 0;
    }
  `}
`;

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledNav open={open}>
      <Button onClick={() => setOpen(!open)}>Toggle</Button>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/menu">Menu</Link>
      </nav>
    </StyledNav>
  );
};

export default MobileNav;