import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tag = styled.span`
  margin-right: 10px;
  border-radius: 20px;
  padding: 4px 10px;
  background-color: #f1f1f1;
  color: gray;
`;

const CardStyled = styled.a`
  width: 360px;
  height: 450px;
  background-color: white;
  color: black;
  margin: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 8px 14px -7px #c7c7c7;
  text-decoration: none;

  img {
    width: 100%;
    height: 200px;
    min-height: 200px;
    display: block;
    object-fit: cover;
    border-radius: 4px;
  }

  .text-content {
    text-align: left;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    height: 100%;

    p {
      color: gray;
    }

    h3 {
      margin: 0;
    }

    .tags {
      display: inline-flex;
      flex-wrap: wrap;
      margin-top: auto;
    }
  }
`;

const Card = (props) => {
  return (
    <CardStyled href={props.link} {...props}>
      <img src={props.image} alt="" />
      <div className="text-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="tags">
          {props.tags &&
            props.tags.map((tag, index) => <Tag key={index}>#{tag}</Tag>)}
        </div>
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.array,
};

export default Card;
