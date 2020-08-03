import React from "react";
import "./header.css";
import "../../css/sizing.css";
// import logo from "../../assets/epi_logo_transparent2.png";
import logo2 from "../../assets/flycollect.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="flex-box-vert-align pos-absolute flex-center">
        {/* <img src={logo} alt="EPI logo" width="60px" /> */}
        <img src={logo2} alt="EPI logo" width="100px" />
        {/* <span
          style={{
            "font-family": "'Neucha', cursive",
            "font-size": "1.8em",
            fontStyle: "bold",
          }}
        >
          PICKOLLECT
        </span> */}
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
