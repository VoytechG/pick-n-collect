import React from "react";
import PropTypes from "prop-types";
import { exampleOrders } from "./../../debugging/exampleOrders";
import OrderBox from "./OrderBox";

const OrdersList = (props) => {
  return (
    <div>
      {exampleOrders.map((order) => (
        <OrderBox order={order} />
      ))}
    </div>
  );
};

OrdersList.propTypes = {};

export default OrdersList;
