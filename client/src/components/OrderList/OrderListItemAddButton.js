import React from "react";
import "./order-box.css";
import { PropTypes } from "prop-types";

const OrderListItemAddButton = ({ onClick }) => {
  return (
    <div className="card card-add-button" onClick={onClick}>
      <div className="plus alt"></div>
    </div>
  );
};

OrderListItemAddButton.propTypes = {
  onClick: PropTypes.func,
};

export default OrderListItemAddButton;
