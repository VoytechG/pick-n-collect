import React, { useState } from "react";
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

  const [newlyAddedItemId, setNewItemId] = useState(null);

  const order = orders.filter((ord) => ord.number === Number(number))[0];

  const orderItems = order ? order.items : null;

  const history = useHistory();
  const returnToOrdersList = () => {
    history.push("");
  };

  const handleAddingNewItem = () => {
    if (order) {
      const newOrderItem = {
        id: idGen(),
        props: {
          orderId: order.id,
          productName: "",
          productDescription: "",
        },
      };
      addItemToOrder(newOrderItem);
      setNewItemId(newOrderItem.id);
    }
  };

  return (
    <>
      <div className="list-header ">
        <div className="return-button" onClick={returnToOrdersList}>
          <div className="return-button-fill"></div>
        </div>
      </div>
      {order ? (
        <>
          <OrderInfo order={order} />
          <div className="header-center margin-vertical">
            <div>Produkty na mojej liście</div>
          </div>

          {orderItems.map((itemId, i) => (
            <Item
              key={itemId}
              itemId={itemId}
              numberOnTheList={i + 1}
              newlyAdded={newlyAddedItemId === itemId}
              removeNewlyAddedTag={() => setNewItemId(null)}
            />
          ))}
          <ItemAddButton onClick={handleAddingNewItem} />
        </>
      ) : (
        <div className="header-center">
          Zamówienie o numerze #{number} nie istnieje.
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.orderItems,
    orders: Object.entries(state.orders).map(([key, props]) => {
      return {
        id: key,
        ...props,
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
