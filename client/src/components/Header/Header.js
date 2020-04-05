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

        <div
          className="flex-box-vert-align overflow-y"
          style={{ flex: 4, justifyContent: "space-between" }}
        >
          <div className="flex-box-vert-align">
            <LinkButton
              linkUrl="/test1"
              buttonText="Test 1"
              currentUrl={currentUrl}
            />
            <LinkButton
              linkUrl="/test2"
              buttonText="Test 2"
              currentUrl={currentUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
