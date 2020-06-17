import React from "react";
import { navigate } from "@reach/router";
import "./notFound.css";

const NotFound = props => {
  return (
    <div className="not-found-view">
      <h1>404</h1>
      <p>Oh, something went wrong! Please go back to the home page</p>
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
};

export default NotFound;
