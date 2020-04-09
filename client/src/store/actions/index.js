import { addOrder } from "./orders";
import { addItemToOrder } from "./orderItems";

export const ADD_ORDER = "ADD_ORDER";
export const ADD_ITEM_TO_ORDER = "ADD_ITEM_TO_ORDER";

export function validateType(obj, types) {
  if (Object.keys(obj).length !== Object.keys(types).length) {
    throw new TypeError("wrong type");
  }

  for (const [key, value] of Object.entries(obj)) {
    if (!types[key] || (value != null && types[key] !== typeof value)) {
      throw new TypeError(`key ${key} value ${value}`);
    }
  }
}

export default {
  addOrder,
  addItemToOrder,
};
