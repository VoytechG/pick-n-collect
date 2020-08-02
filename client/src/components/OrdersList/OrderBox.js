import React from "react";
import PropTypes from "prop-types";
import "../../css/list-item-box.css";
import "../../css/interaction.css";
import {
  OrderStatusMessages,
  sumMessage,
  orderTitle,
} from "../../logic/Orders/Order";
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

const OrderBox = ({ order, language }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const redirectToOrder = () => {
    console.log(url);
    const orderUrl = `${url}/${order.number}`;
    history.push(orderUrl);
  };

  const totalBillingAmount = order.totalBillingAmount
    ? `${order.totalBillingAmount.toFixed(2)} €`
    : "-//-";

  return (
    <div
      className="card light-up-active hover-color noselect"
      onClick={redirectToOrder}
    >
      <div className="flex-space-between font-bigger">
        <div className="font-bold">{`${orderTitle[language]} #${order.number}`}</div>
        <div>{order.dateOrderPlaced}</div>
      </div>
      <div>{order.notes}</div>
      <div className="flex">
        <div>{sumMessage[language]}</div>
        <div className="flex-gap"></div>
        <div className="font-bold">{totalBillingAmount}</div>
      </div>
      <div className="flex-center">
        <div>{OrderStatusMessages[order.status][language]}</div>
      </div>
    </div>
  );
};

OrderBox.propTypes = {
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(OrderBox);
