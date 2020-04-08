import { combineReducers } from "redux";

import { ADD_ITEM_TO_ORDER, ADD_ORDER } from "../actions";

/**
 * Depth level 2
 */

function order(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
      const items = [...state.items, action.item.id];
      return {
        ...state,
        items,
      };
    default:
      return state;
  }
}

/**
 * Depth level 1
 *
 */

function orders(state = {}, action) {
  switch (action.type) {
    case ADD_ORDER:
      const { id, props } = action.order;

      return {
        ...state,
        [id]: props,
      };
    case ADD_ITEM_TO_ORDER:
      const orderId = action.item.props.orderId;

      return {
        ...state,
        [orderId]: order(state[orderId], action),
      };

    default:
      return state;
  }
}

function orderItems(state = [], action) {
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
      const { id, props } = action.item;
      return { ...state, [id]: props };
    default:
      return state;
  }
}

/**
 *  root
 */

const app = combineReducers({ orders, orderItems });

export default app;
