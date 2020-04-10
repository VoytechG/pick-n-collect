import React, { useState } from "react";
import PropTypes from "prop-types";
import OrderInfo from "./OrderInfo";
import ItemAddButton from "./ItemAddButton";
import Item from "./ItemBox";
import {
  addItemToOrder,
  removeOrderItem,
} from "../../store/actions/orderItems";
import idGen from "../../utils/idGenerator";
import { collapseItemCard } from "../../domjs/collapseItem";
import { connect } from "react-redux";

const OrderItemsList = ({ order, addItemToOrder, deleteItem }) => {
  const [newlyAddedItemId, setNewItemId] = useState(null);
  const [allItemIdsCacheOrderedList, setAllItemIdsCache] = useState(
    order.items
  );
  const [deletedItemIds, setDeletedItemsIds] = useState(new Set());

  const handleAddingNewItem = () => {
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
  };

  const handleItemDeletion = (itemId, orderId) => {
    deleteItem(itemId, orderId);
    collapseItemCard(itemId);
    setDeletedItemsIds(new Set(deletedItemIds).add(itemId));
  };

  let itemCounter = 0;

  return (
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
  );
};

OrderItemsList.propTypes = {
  order: PropTypes.object.isRequired,
  addItemToOrder: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
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

export default connect(null, mapDispatchToProps)(OrderItemsList);
