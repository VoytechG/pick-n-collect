export const ADD_ORDER = "ADD_ORDER";
export const MODIFY_ORDER = "MODIFY_ORDER";
export const ADD_ITEM_TO_ORDER = "ADD_ITEM_TO_ORDER";

export const MODIFY_ORDER_ITEM = "MODIFY_ORDER_ITEM";
export const REMOVE_ORDER_ITEM = "REMOVE_ORDER_ITEM";

export const SET_LANGUAGE = "SET_LANGUAGE";

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
