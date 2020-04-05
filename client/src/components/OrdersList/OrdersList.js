import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { exampleOrders } from "./../../debugging/exampleOrders";
import OrderBox from "./OrderBox";
import "../../css/list-item-box.css";
import { useStoreState, useStoreActions } from "easy-peasy";

const OrdersList = (props) => {
  const [orders, addOrders] = [
    useStoreState((state) => state.userData.orders),
    useStoreActions((actions) => actions.userData.addOrders),
  ];

  /**
   * For demo purposes only
   */
  useEffect(() => {
    const thereAreNoOrders = Object.keys(orders).length === 0;
    if (thereAreNoOrders) {
      addOrders(exampleOrders);
    }
  });

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
