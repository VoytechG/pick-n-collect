import React from "react";
import "./order-box.css";
import { PropTypes } from "prop-types";
import OrderItem from "./../../logic/Orders/OrderItem";

const OrderListItem = ({ orderItem, numberOnTheList }) => {
  return (
    <div className="card">
      <div className="item-title">{`#${numberOnTheList} ${orderItem.productName}`}</div>
      <div>{orderItem.productDescription}</div>
    </div>
  );
};

OrderListItem.propTypes = {
  orderItem: PropTypes.instanceOf(OrderItem),
  numberOnTheList: PropTypes.number,
};

export default OrderListItem;
