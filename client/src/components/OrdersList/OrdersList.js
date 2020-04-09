import React, { useEffect } from "react";
import PropTypes from "prop-types";
import OrderBox from "./OrderBox";
import "../../css/list-item-box.css";
import { connect } from "react-redux";
import { addOrder } from "../../store/actions/orders";

const OrdersList = ({ orders, addOrder }) => {
  return (
    <div>
      <div className="list-header flex-center">Moje EPI Zakupy</div>
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

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (order) => {
      dispatch(addOrder(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
