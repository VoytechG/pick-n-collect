import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../css/list-item-box.css";
import "../../css/interaction.css";
import "../../css/input.css";
import {
  orderSubtitlePlaceholder,
  OrderStatusMessages,
  orderTitle,
  sumMessage,
} from "../../logic/Orders/Order";
import { connect } from "react-redux";

import { modifyOrder } from "../../store/actions/orders";
import { blurOnEnter } from "../../domjs/inputControls";

function formatBillingAmount(order) {
  const totalBillingAmount = order.totalBillingAmount
    ? `${order.totalBillingAmount.toFixed(2)} €`
    : "-//-";
  return totalBillingAmount;
}

const OrderInfo = ({ orderId, order, modifyOrderNotes, language }) => {
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
        <div className="font-bold">{`${orderTitle[language]} #${order.number}`}</div>
        <div>{order.dateOrderPlaced}</div>
      </div>
      <div className="flex">
        <input
          type="text"
          name="notes"
          placeholder={orderSubtitlePlaceholder[language]}
          value={`${input.notes}`}
          onChange={onChange}
          onBlur={() => {
            handleModifyItem();
            // removeNewlyAddedTag();
          }}
          onKeyDown={blurOnEnter}
        />
      </div>
      <div className="flex">
        <div>{sumMessage[language]} </div>
        <div className="flex-gap"></div>
        <div className="font-bold">{formatBillingAmount(order)}</div>
      </div>
      <div className="flex-center">
        <div>{OrderStatusMessages[order.status][language]}</div>
      </div>
    </div>
  );
};

OrderInfo.propTypes = {
  orderId: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired,
  modifyOrderNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    ...ownProps,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);
