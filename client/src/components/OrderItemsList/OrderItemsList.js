import React from "react";
import "../../css/list-item-box.css";
import Item from "./ItemBox";
import ItemAddButton from "./ItemAddButton";
import { useParams, useHistory } from "react-router-dom";
import { addItemToOrder } from "../../store/actions/orderItems";
import { connect } from "react-redux";
import idGen from "../../utils/idGenerator";
import OrderInfo from "./OrderInfo";

const OrderItemsList = ({ items, addItemToOrder, orders }) => {
  const { number } = useParams();

  const order = orders.filter((ord) => ord.number === Number(number))[0];

  const orderItems = order.items.map((itemId) => items[itemId]) || null;

  const newOrderItem = order
    ? {
        id: idGen(),
        props: {
          orderId: order.id,
          productName: "",
          productDescription: "",
        },
      }
    : null;

  const history = useHistory();

  const returnToOrdersList = () => {
    history.push("");
  };

  return (
    <>
      <div className="list-header ">
        <div className="return-button" onClick={returnToOrdersList}>
          <div className="">◀</div>
        </div>
      </div>
      <OrderInfo order={order} />
      <div className="header-center margin-vertical">
        <div>Produkty na mojej liście</div>
      </div>

      {order ? (
        <div>
          {orderItems.map((orderItem, i) => (
            <Item key={i} numberOnTheList={i + 1} orderItem={orderItem} />
          ))}
          <ItemAddButton onClick={() => addItemToOrder(newOrderItem)} />
        </div>
      ) : (
        <div>Zamówienie o numerze #{number} nie istnieje.</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.orderItems,
    orders: Object.entries(state.orders).map(([key, ord]) => {
      return {
        id: key,
        ...ord,
      };
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToOrder: (item) => {
      dispatch(addItemToOrder(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItemsList);
