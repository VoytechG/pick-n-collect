import React from "react";
import "./order-box.css";
import { OrderListItem } from "./OrderListItem";
import OrderItem from "../../logic/Orders/OrderItem";
import { OrderListItemAddButton } from "./OrderListItemAddButton";
export const Order = () => {
  const exampleOrderItem = new OrderItem(
    "somemockid",
    "orderId",
    "Mleko",
    "UHT 3.2%, 3 kartony"
  );

  return (
    <div className="flex">
      <OrderListItem orderItem={exampleOrderItem} />
      <OrderListItem orderItem={exampleOrderItem} />
      <OrderListItem orderItem={exampleOrderItem} />
      <OrderListItem orderItem={exampleOrderItem} />
      <OrderListItemAddButton orderItem={exampleOrderItem} />
    </div>
  );
};
