import React from "react";
import PropTypes from "prop-types";
import OrderBox from "./OrderBox";
import "../../css/list-item-box.css";
import { connect } from "react-redux";
import { addOrder } from "../../store/actions/orders";
import { orderListHeader } from "../../logic/Orders/Order";

const OrdersList = ({ orders, language, addOrder }) => {
  return (
    <div>
      <div className="list-header flex-center">{orderListHeader[language]}</div>
      <div>
        {orders
          .sort((order_a, order_b) => order_b.number - order_a.number)
          .map((order) => (
            <OrderBox key={order.id} order={order} />
          ))}
      </div>
    </div>
  );
};

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
  addOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    orders: Object.entries(state.orders).map(([id, props]) => {
      return {
        id,
        ...props,
      };
    }),
    language: state.language,
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
