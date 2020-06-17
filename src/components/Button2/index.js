import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = props => {
  return (
    <button onClick={props.handleClick} className="btnSmall">
      <span>
      {props.buttonText}
      </span>
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  buttonText: "what?"
};

export default Button;