import React, { useState, useEffect } from "react";
import "../../css/list-item-box.css";
import Item from "./ItemBox";
import ItemAddButton from "./ItemAddButton";
import { useParams, useHistory } from "react-router-dom";
import {
  addItemToOrder,
  removeOrderItem,
} from "../../store/actions/orderItems";
import { connect } from "react-redux";
import idGen from "../../utils/idGenerator";
import OrderInfo from "./OrderInfo";
import { collapseItemCard } from "../../domjs/collapseItem";

const OrderItemsList = ({ addItemToOrder, deleteItem, orders }) => {
  const { number } = useParams();
  const order = orders.filter((ord) => ord.number === Number(number))[0];
  const orderItems = order ? order.items : null;

  const [newlyAddedItemId, setNewItemId] = useState(null);
  const [allItemIdsCacheOrderedList, setAllItemIdsCache] = useState(orderItems);
  const [deletedItemIds, setDeletedItemsIds] = useState(new Set());

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
      setAllItemIdsCache([...allItemIdsCacheOrderedList, newOrderItem.id]);
    }
  };

  const handleItemDeletion = (itemId, orderId) => {
    deleteItem(itemId, orderId);
    collapseItemCard(itemId);
    setDeletedItemsIds(new Set(deletedItemIds).add(itemId));
  };

  let itemCounter = 0;
  return (
    <>
      <div className="list-header ">
        <div className="return-button" onClick={returnToOrdersList}>
          <div className="list-header-button-box return-button-fill" />
        </div>
      </div>
      {order ? (
        <>
          <OrderInfo order={order} />
          <div className="header-center margin-vertical no-margin-bottom">
            <div>Produkty na mojej liście</div>
          </div>
          {allItemIdsCacheOrderedList.map((itemId) => {
            if (!deletedItemIds.has(itemId)) {
              itemCounter++;
            }
            return (
              <Item
                key={itemId}
                itemId={itemId}
                id={itemId}
                numberOnTheList={itemCounter}
                newlyAdded={newlyAddedItemId === itemId}
                removeNewlyAddedTag={() => setNewItemId(null)}
                deleteItem={() => handleItemDeletion(itemId, order.id)}
              />
            );
          })}
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
    // items: state.orderItems,
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
    deleteItem: (itemId, orderId) => {
      dispatch(removeOrderItem({ id: itemId, props: { orderId } }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItemsList);
