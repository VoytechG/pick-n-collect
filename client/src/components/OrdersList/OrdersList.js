import React from "react";
import PropTypes from "prop-types";
import { exampleOrders } from "./../../debugging/exampleOrders";
import OrderBox from "./OrderBox";
import "../../css/list-item-box.css";

const OrdersList = (props) => {
  return (
    <div>
      <div className="list-header">Moje EPI Zakupy</div>
      <div>
        {exampleOrders
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
