export const ADD_ORDER = "ADD_ORDER";
export const ADD_ITEM_TO_ORDER = "ADD_ITEM_TO_ORDER";

function validateType(obj, types) {
  if (Object.keys(obj).length !== Object.keys(types).length) {
    throw new TypeError("wrong type");
  }

  for (const [key, value] of Object.entries(obj)) {
    if (!types[key] || (value != null && types[key] !== typeof value)) {
      throw new TypeError("wrong type");
    }
  }
}

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

export function addOrder(order) {
  const { id, props } = order;
  validateType({ id }, { id: "string" });
  validateType(props, {
    customerId: "string",
    notes: "string",
    number: "number",
    dateOrderPlaced: "string",
    status: "string",
    orderItemsList: "object",
    totalBillingAmount: "number",
  });

  return { type: ADD_ORDER, order };
}
