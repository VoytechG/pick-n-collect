import React from "react";
import "../../css/list-item-box.css";
import { PropTypes } from "prop-types";
import OrderItem from "../../logic/Orders/OrderItem";

const ItemBox = ({ orderItem, numberOnTheList }) => {
  return (
    <div className="card">
      <div className="itemBox-title">{`#${numberOnTheList} ${orderItem.productName}`}</div>
      <div>{orderItem.productDescription}</div>
    </div>
  );
};

ItemBox.propTypes = {
  orderItem: PropTypes.instanceOf(OrderItem),
  numberOnTheList: PropTypes.number,
};

export default ItemBox;
