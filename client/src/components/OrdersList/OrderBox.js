import React from "react";
import PropTypes from "prop-types";
import Order from "../../logic/Orders/Order";
import "../../css/list-item-box.css";
import { OrderStatusMessagesInPolish } from "../../logic/Orders/Order";

const OrderBox = ({ order }) => {
  console.log(OrderStatusMessagesInPolish);

  return (
    <div className="card">
      <div className="flex-space-between font-bigger">
        <div className="font-bold">{`EpiZakupy #${order.number}`}</div>
        <div>{order.dateOrderPlaced}</div>
      </div>
      <div>{order.notes}</div>
      <div className="flex-space-between">
        <div>Status: </div>
        <div className="flex-gap"></div>
        <div>{OrderStatusMessagesInPolish[order.status]}</div>
      </div>
      <div className="flex">
        <div>Suma: </div>
        <div className="flex-gap"></div>
        <div className="font-bold">
          {order.billingTotalAmount ? order.billingTotalAmount : "-//-"}
        </div>
      </div>
    </div>
  );
};

OrderBox.propTypes = {
  order: PropTypes.instanceOf(Order),
};

export default OrderBox;
