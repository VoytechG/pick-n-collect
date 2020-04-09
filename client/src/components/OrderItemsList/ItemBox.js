import React from "react";
import "../../css/list-item-box.css";
import { PropTypes } from "prop-types";
import OrderItem from "../../logic/Orders/OrderItem";
import { connect } from "react-redux";
import { modifyOrderItem } from "../../store/actions/orderItems";

const ItemBox = ({ itemId, item, modifyItem, numberOnTheList }) => {
  return (
    <div className="card">
      <div className="itemBox-title">{`#${numberOnTheList} ${item.productName}`}</div>
      <div>{item.productDescription}</div>
    </div>
  );
};

ItemBox.propTypes = {
  itemId: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  modifyItem: PropTypes.func.isRequired,
  numberOnTheList: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { itemId } = ownProps;
  return {
    item: { ...state.orderItems[itemId] },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyItem: (item) => {
      dispatch(modifyOrderItem(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemBox);
