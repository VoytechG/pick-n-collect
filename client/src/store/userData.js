import { action, computed } from "easy-peasy";
import Order from "./../logic/Orders/Order";

export const userData = {
  /**
   * the format should be:
   * orders : {
   *    orderNumber: instanceOf Order
   * }
   */
  orders: {},
  addOrders: action((userData, ordersToAdd) => {
    for (const [orderNumber, order] of Object.entries(ordersToAdd)) {
      if (!(order instanceof Order)) {
        throw new TypeError("'order' must be of type Order");
      }
      if (userData.orders[orderNumber]) {
        throw new EvalError(`order of number ${orderNumber}`);
      }
    }
    userData.orders = { ...userData.orders, ...ordersToAdd };
  }),
  addItemToOrder: action((userData, { orderNumber, newOrderItem }) => {
    console.log(newOrderItem);
    userData.orders[orderNumber].orderItemsList.push(newOrderItem);
  }),
};
