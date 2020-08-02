import React from "react";
import PropTypes from "prop-types";
import Order, {
  OrderStatusMessages,
  OrderStatus,
} from "../../logic/Orders/Order";
import { connect } from "react-redux";
import { modifyOrder } from "../../store/actions/orders";

const PlaceOrderController = ({ order, orderId, language }) => {
  return (
    <div className="flex-center list-header-middle">
      {order.status === OrderStatus.DRAFT}
      <div>{OrderStatusMessages[order.status][language]}</div>
    </div>
  );
};

PlaceOrderController.propTypes = { order: PropTypes.object.isRequired };

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyOrderStatus: (orderId, order, status) => {
      dispatch(
        modifyOrder({
          id: orderId,
          props: { ...order, status },
        })
      );
    },
  };
};

export default connect(mapStateToProps)(PlaceOrderController);
