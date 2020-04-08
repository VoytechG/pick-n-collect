import { validateType, ADD_ITEM_TO_ORDER } from "./index";

export function addItemToOrder(item) {
  const { id, props } = item;
  validateType({ id }, { id: "string" });
  validateType(props, {
    orderId: "string",
    productName: "string",
    productDescription: "string",
  });

  return { type: ADD_ITEM_TO_ORDER, item };
}
