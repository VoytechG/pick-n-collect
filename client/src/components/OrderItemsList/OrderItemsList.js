import React, { useState } from "react";
import "../../css/list-item-box.css";
import Item from "./ItemBox";
import OrderItem from "../../logic/Orders/OrderItem";
import ItemAddButton from "./ItemAddButton";
import Order from "../../logic/Orders/Order";

const OrderItemsList = ({ order }) => {
  return (
    <div className="flex">
      {order.orderProductList.map((orderItem, i) => (
        <Item key={i} numberOnTheList={i + 1} orderItem={orderItem} />
      ))}
      <ItemAddButton onClick={() => {}} />
    </div>
  );
};

export default OrderItemsList;
