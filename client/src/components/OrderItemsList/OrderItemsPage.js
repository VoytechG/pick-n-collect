import React from "react";
import "../../css/list-item-box.css";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import OrderItemsList from "./OrderItemsList";

const OrderItemsPage = ({ orders }) => {
  const { number } = useParams();
  const order = orders.filter((ord) => ord.number === Number(number))[0];

  const history = useHistory();
  const returnToOrdersList = () => {
    history.push("");
  };

  return (
    <>
      <div className="list-header ">
        <div className="return-button" onClick={returnToOrdersList}>
          <div className="list-header-button-box return-button-fill" />
        </div>
      </div>
      {order ? (
        <OrderItemsList order={order} />
      ) : (
        <div className="header-center">
          Zamówienie o numerze #{number} nie istnieje.
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: Object.entries(state.orders).map(([key, props]) => {
      return {
        id: key,
        ...props,
      };
    }),
  };
};

export default connect(mapStateToProps)(OrderItemsPage);
