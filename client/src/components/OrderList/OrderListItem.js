import React from "react";
import "./order-box.css";
import { PropTypes } from "prop-types";
import OrderItem from "./../../logic/Orders/OrderItem";

export const OrderListItem = ({ orderItem }) => {
  return (
    <div className="card">
      <div className="item-title">{orderItem.productName}</div>
      <div>{orderItem.productDescription}</div>
    </div>
  );
};

OrderListItem.propTypes = {
  OrderItem: PropTypes.instanceOf(OrderItem),
};
