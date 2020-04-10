import {
  validateType,
  ADD_ITEM_TO_ORDER,
  MODIFY_ORDER_ITEM,
  REMOVE_ORDER_ITEM,
} from "./index";

function validateItemId(item) {
  const { id } = item;
  validateType({ id }, { id: "string" });
}

function validateItem(item) {
  validateItemId(item);

  const { props } = item;
  validateType(props, {
    orderId: "string",
    productName: "string",
    productDescription: "string",
  });
}

export function addItemToOrder(item) {
  validateItem(item);

  return { type: ADD_ITEM_TO_ORDER, item };
}

export function modifyOrderItem(item) {
  validateItem(item);

  return { type: MODIFY_ORDER_ITEM, item };
}

export function removeOrderItem(item) {
  validateItemId(item);
  validateType(item.props, {
    orderId: "string",
  });

  return { type: REMOVE_ORDER_ITEM, item };
}
