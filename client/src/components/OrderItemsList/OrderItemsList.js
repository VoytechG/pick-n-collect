import React from "react";
import "../../css/list-item-box.css";
import Item from "./ItemBox";
import ItemAddButton from "./ItemAddButton";
import { useParams, useHistory } from "react-router-dom";
import OrderItem from "./../../logic/Orders/OrderItem";
import { addItemToOrder } from "./../../store/actions";
import { connect } from "react-redux";
import { v4 as id4 } from "uuid";

const OrderItemsList = ({ items, addItemToOrder, orders }) => {
  const { number } = useParams();

  let order = Object.entries(orders)
    .filter(([key, ord]) => ord.number === Number(number))
    .map(([key, ord]) => {
      return {
        id: key,
        ...ord,
      };
    })[0];

  console.log(order);
  // cons;

  const orderItems = () => {
    if (order) {
      return order.items.map((itemId) => items[itemId]);
    }
  };

  // console.log(orderItems);

  const newOrderItem = () => {
    if (order) {
      return {
        id: id4(),
        props: {
          orderId: order.id,
          productName: "",
          productDescription: "",
        },
      };
    }
  };

  const history = useHistory();

  const returnToOrdersList = () => {
    history.push("");
  };

  return (
    <div>
      <div>
        <div className="list-header">
          <div
            className="header-left return-button"
            onClick={returnToOrdersList}
          >
            {"◀"}
          </div>
          <div className="header-center">
            <div>Produkty na mojej liście</div>
          </div>
        </div>
      </div>

      {order ? (
        <div>
          {orderItems().map((orderItem, i) => (
            <Item key={i} numberOnTheList={i + 1} orderItem={orderItem} />
          ))}
          <ItemAddButton onClick={() => addItemToOrder(newOrderItem())} />
        </div>
      ) : (
        <div>Zamówienie o numerze #{number} nie istnieje.</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.orderItems,
    orders: state.orders,
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
