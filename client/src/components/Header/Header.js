import React, { useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import "./header.css";
import "../../css/sizing.css";
import "../../css/colors.css";
import LinkButton from "./LinkButton";
import logo from "../../assets/epi_logo_transparent2.png";

const Header = () => {
  const { pathname: currentUrl } = useLocation();

  return (
    <div className="header-container">
      <div className="flex-box-vert-align">
        <img src={logo} alt="EPI logo" width="60px" />
        {/* <img src={logo} alt="EPI logo" width="60px" /> */}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
