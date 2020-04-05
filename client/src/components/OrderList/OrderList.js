import React, { useState } from "react";
import "./order-box.css";
import OrderListItem from "./OrderListItem";
import OrderItem from "../../logic/Orders/OrderItem";
import OrderListItemAddButton from "./OrderListItemAddButton";
import Order from "../../logic/Orders/Order";

const exampleOrderItem = new OrderItem(
  "somemockid",
  "orderId",
  "Mleko",
  "UHT 3.2%, 3 kartony"
);

const exampleOrderList = new Order("someid", "customerid", "01/05/2020");

const OrderList = () => {
  const [order, setOrder] = useState(exampleOrderList);

  const addItem = () => {
    order.orderProductList.push(new OrderItem(null, null, "Jabłka", "0.25kg"));
    const updatedOrder = new Order();
    updatedOrder.orderProductList = order.orderProductList;
    setOrder(updatedOrder);
  };

  return (
    <div className="flex">
      {order.orderProductList.map((orderItem, i) => (
        <OrderListItem key={i} numberOnTheList={i + 1} orderItem={orderItem} />
      ))}
      <OrderListItemAddButton onClick={addItem} />
    </div>
  );
};

export default OrderList;
