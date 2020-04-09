import React from "react";
import PropTypes from "prop-types";
import Order from "../../logic/Orders/Order";
import "../../css/list-item-box.css";
import "../../css/interaction.css";
import { OrderStatusMessagesInPolish } from "../../logic/Orders/Order";
import { useHistory, useRouteMatch } from "react-router-dom";

const OrderBox = ({ order }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const redirectToOrder = () => {
    console.log(url);
    const orderUrl = `${url}/${order.number}`;
    history.push(orderUrl);
  };

  const totalBillingAmount = order.totalBillingAmount
    ? `${order.totalBillingAmount.toFixed(2)}  zł`
    : "-//-";

  return (
    <div
      className="card light-up-active hover-color noselect"
      onClick={redirectToOrder}
    >
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

OrderBox.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderBox;
