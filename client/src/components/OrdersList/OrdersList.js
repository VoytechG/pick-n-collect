import React, { useEffect } from "react";
import PropTypes from "prop-types";
import OrderBox from "./OrderBox";
import "../../css/list-item-box.css";
import { useStoreState, useStoreActions } from "easy-peasy";

const OrdersList = ({ orders, addOrders }) => {
  return (
    <div>
      <div className="list-header">Moje EPI Zakupy</div>
      <div>
        {Object.values(orders)
          .sort((order_a, order_b) => order_b.number - order_a.number)
          .map((order) => (
            <OrderBox key={order.number} order={order} />
          ))}
      </div>
    </div>
  );
};

OrdersList.propTypes = {};

export default OrdersList;
