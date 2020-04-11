import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../css/list-item-box.css";
import "../../css/interaction.css";
import "../../css/input.css";
import { OrderStatusMessagesInPolish } from "../../logic/Orders/Order";
import { connect } from "react-redux";

import { modifyOrder } from "../../store/actions/orders";

function formatBillingAmount(order) {
  const totalBillingAmount = order.totalBillingAmount
    ? `${order.totalBillingAmount.toFixed(2)}  zł`
    : "-//-";
  return totalBillingAmount;
}

const OrderInfo = ({ orderId, order, modifyOrderNotes }) => {
  const [input, setInput] = useState({
    notes: order.notes,
  });

  const handleModifyItem = () => {
    modifyOrderNotes(orderId, order, input.notes);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="card no-margin-bottom">
      <div className="flex-space-between font-bigger">
        <div className="font-bold">{`Zakupy #${order.number}`}</div>
        <div>{order.dateOrderPlaced}</div>
      </div>
      <input
        type="text"
        name="notes"
        placeholder="notatki (np. zakupy na cały tydzień)"
        value={`${input.notes}`}
        onChange={onChange}
        onBlur={() => {
          handleModifyItem();
          // removeNewlyAddedTag();
        }}
      />
      <div className="flex">
        <div>Suma: </div>
        <div className="flex-gap"></div>
        <div className="font-bold">{formatBillingAmount(order)}</div>
      </div>
      <div className="flex-center">
        <div>{OrderStatusMessagesInPolish[order.status]}</div>
      </div>
    </div>
  );
};

OrderInfo.propTypes = {
  orderId: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired,
  modifyOrderNotes: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyOrderNotes: (orderId, order, notes) => {
      dispatch(
        modifyOrder({
          id: orderId,
          props: { ...order, notes },
        })
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(OrderInfo);
