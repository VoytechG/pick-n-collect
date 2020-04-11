import { validateType, ADD_ORDER, MODIFY_ORDER } from "./index";

function validateOrder(order) {
  const { id, props } = order;
  validateType({ id }, { id: "string" });
  validateType(props, {
    customerId: "string",
    notes: "string",
    number: "number",
    dateOrderPlaced: "string",
    status: "string",
    items: "object",
    totalBillingAmount: "number",
  });
}

export function addOrder(order) {
  validateOrder(order);
  return { type: ADD_ORDER, order };
}

export function modifyOrder(order) {
  validateOrder(order);
  return { type: MODIFY_ORDER, order };
}
