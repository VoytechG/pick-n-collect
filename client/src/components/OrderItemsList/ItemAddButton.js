import React from "react";
import "../../css/list-item-box.css";
import { PropTypes } from "prop-types";

const ItemAddButton = ({ onClick }) => {
  return (
    <div className="card card-add-button" onClick={onClick}>
      <div className="plus alt"></div>
    </div>
  );
};

ItemAddButton.propTypes = {
  onClick: PropTypes.func,
};

export default ItemAddButton;
