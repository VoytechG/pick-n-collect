import React, { useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import "./header.css";
import "../../css/sizing.css";
import LinkButton from "./LinkButton";
import logo from "../../assets/epi_logo_transparent2.png";

const Header = () => {
  const { pathname: currentUrl } = useLocation();

  return (
    <div className="header-container">
      <div className="flex-box-vert-align pos-absolute flex-center">
        <img src={logo} alt="EPI logo" width="60px" />
      </div>
      <div className="flex-box-vert-align pos-absolute flex-space-between">
        {/* <div className="button noselect">MENU</div> */}
        {/* <div className="button">ZALOGUJ</div> */}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
