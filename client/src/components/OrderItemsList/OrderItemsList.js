import React, { useState, useEffect } from "react";
import "../../css/list-item-box.css";
import Item from "./ItemBox";
import ItemAddButton from "./ItemAddButton";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams, useHistory } from "react-router-dom";
import OrderItem from "./../../logic/Orders/OrderItem";

const OrderItemsList = () => {
  const { number } = useParams();

  const order = useStoreState((state) => state.userData.orders[number]);
  const addItemToOrder = useStoreActions(
    (actions) => actions.userData.addItemToOrder
  );
  const addItem = () => {
    // const newOrderItem = new OrderItem("", order.orderId, "", "");
    const newOrderItem = {
      orderItemId: "",
      orderId: order.orderId,
      productName: "",
      productDescription: "",
    };
    addItemToOrder({ orderNumber: order.number, newOrderItem });
  };

  useEffect(() => {
    addItemToOrder({});
  }, []);

  const history = useHistory();

  const returnToOrdersList = () => {
    history.push("");
  };

  console.log("order", order);

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
          {order.orderItemsList.map((orderItem, i) => (
            <Item key={i} numberOnTheList={i + 1} orderItem={orderItem} />
          ))}
          <ItemAddButton onClick={addItem} />
        </div>
      ) : (
        <div>Zamówienie o numerze #{number} nie istnieje.</div>
      )}
    </div>
  );
};

export default OrderItemsList;
