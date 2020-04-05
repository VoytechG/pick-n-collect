import React from "react";
import "./order-box.css";
import { PropTypes } from "prop-types";
import OrderItem from "./../../logic/Orders/OrderItem";

export const OrderListItemAddButton = ({ orderItem }) => {
  return (
    <div className="card card-add-button">
      <div className="plus alt"></div>
    </div>
  );
};

OrderListItemAddButton.propTypes = {
  OrderItem: PropTypes.instanceOf(OrderItem),
};
