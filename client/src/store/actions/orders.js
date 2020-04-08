import { validateType, ADD_ORDER } from "./index";

export function addOrder(order) {
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

  return { type: ADD_ORDER, order };
}
