import React from "react";
import "./header.css";
import "../../css/sizing.css";
import logo from "../../assets/epi_logo_transparent2.png";

const Header = () => {
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
