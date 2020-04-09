import { validateType, ADD_ITEM_TO_ORDER, MODIFY_ORDER_ITEM } from "./index";

function validateItem(item) {
  const { id, props } = item;
  validateType({ id }, { id: "string" });
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
