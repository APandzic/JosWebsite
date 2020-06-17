import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 12px 40px;
  color: white;
  font-weight: bold;
  border: 0;
  font-size: 14px;
  border-radius: 3px;
  display: inline-block;
  width: max-content;
  margin-bottom: 10px;
  background-color: black;
  cursor: pointer;
  transition: 0.3s ease;
  margin: 20px;
  box-shadow: 10px 10px 0px 0px tomato;

  &:hover {
    background-color: black;
    box-shadow: 3px 3px 0px 0px tomato;
  }

  ${(props) =>
    props.inverted &&
    `
    border: 2px solid black;
    color: black;
    background-color: white;
    box-shadow: 10px 10px 0px 0px green;
    
    &:hover {
      background-color: white;
      box-shadow: 3px 3px 0px 0px green;
    }
  `}
`;

Button.propTypes = {
  inverted: PropTypes.bool,
};

Button.defaultProps = {
  inverted: false,
};

export default Button;
