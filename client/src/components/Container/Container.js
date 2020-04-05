import React from "react";
import PropTypes from "prop-types";
import "../../css/sizing.css";
// import "./container.css";

// const flexBox = {
//   position: "absolute",
//   display: "flex",
//   justifyContent: "center",
//   width: "100%",
//   minHeight: "100%",
//   // overflow
// };

const Container = ({ children }) => {
  return (
    // <div className="flexbox">
    <div className="container content-box">{children}</div>
    // </div>
  );
};

Container.propTypes = {};

export default Container;
