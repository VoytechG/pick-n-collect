import { combineReducers } from "redux";

import {
  ADD_ITEM_TO_ORDER,
  ADD_ORDER,
  MODIFY_ORDER_ITEM,
  REMOVE_ORDER_ITEM,
  MODIFY_ORDER,
} from "../actions";

import language from "./appSettings";

/**
 * Depth level 2
 */

function order(_order = {}, action) {
  switch (action.type) {
    case ADD_ITEM_TO_ORDER: {
      const items = [..._order.items, action.item.id];
      return {
        ..._order,
        items,
      };
    }
    case REMOVE_ORDER_ITEM: {
      const id = action.item.id;
      const items = _order.items.filter((itemId) => itemId !== id);
      return {
        ..._order,
        items,
      };
    }
    default:
      return _order;
  }
}

/**
 * Depth level 1
 *
 */

function orders(_orders = {}, action) {
  switch (action.type) {
    case ADD_ORDER:
    case MODIFY_ORDER: {
      const { id, props } = action.order;

      return {
        ..._orders,
        [id]: props,
      };
    }
    case ADD_ITEM_TO_ORDER:
    case REMOVE_ORDER_ITEM: {
      const orderId = action.item.props.orderId;

      return {
        ..._orders,
        [orderId]: order(_orders[orderId], action),
      };
    }

    default:
      return _orders;
  }
}

function orderItems(_items = [], action) {
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
    case MODIFY_ORDER_ITEM: {
      const { id, props } = action.item;
      return { ..._items, [id]: props };
    }
    case REMOVE_ORDER_ITEM: {
      const id = action.item.id;
      const newState = { ..._items };
      delete _items[id];
      return newState;
    }
    default:
      return _items;
  }
}

/**
 *  root
 */

const app = combineReducers({ orders, orderItems, language });

export default app;
