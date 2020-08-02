import React from "react";
import PropTypes from "prop-types";
import Order, {
  OrderStatusMessagesInPolish,
  OrderStatus,
} from "../../logic/Orders/Order";
import { connect } from "react-redux";
import { modifyOrder } from "../../store/actions/orders";

const PlaceOrderController = ({ order, orderId }) => {
  return (
    <div className="flex-center list-header-middle">
      {order.status === OrderStatus.DRAFT}
      <div>{OrderStatusMessagesInPolish[order.status]}</div>
    </div>
  );
};

PlaceOrderController.propTypes = { order: PropTypes.object.isRequired };

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

export default connect()(PlaceOrderController);
