import React from "react";
import PropTypes from "prop-types";
import "../../css/list-item-box.css";
import "../../css/interaction.css";
import { OrderStatusMessagesInPolish } from "../../logic/Orders/Order";

const OrderInfo = ({ order }) => {
  const totalBillingAmount = order.totalBillingAmount
    ? `${order.totalBillingAmount.toFixed(2)}  zł`
    : "-//-";

  return (
    <div className="card no-margin-vertical">
      <div className="flex-space-between font-bigger">
        <div className="font-bold">{`Zakupy #${order.number}`}</div>
        <div>{order.dateOrderPlaced}</div>
      </div>
      <div>{order.notes}</div>
      <div className="flex">
        <div>Suma: </div>
        <div className="flex-gap"></div>
        <div className="font-bold">{totalBillingAmount}</div>
      </div>
      <div className="flex-center">
        <div>{OrderStatusMessagesInPolish[order.status]}</div>
      </div>
    </div>
  );
};

OrderInfo.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderInfo;
