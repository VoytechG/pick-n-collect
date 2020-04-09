import { exampleOrderAndItems } from "./exampleOrders";
import { addOrder } from "../../store/actions/orders";
import { addItemToOrder } from "../../store/actions/orderItems";
import storeAndPersistor from "../../store/store";

const { store } = storeAndPersistor;

const { orders, items } = exampleOrderAndItems;

const populateStreWithMockDataIfEmpty = () => {
  const noOrders = Object.keys(store.getState().orders).length === 0;

  if (noOrders) {
    for (const o of orders) {
      store.dispatch(
        addOrder({
          id: o.orderId,
          props: o.getContentOfOrder(),
        })
      );
    }

    for (const i of items) {
      store.dispatch(
        addItemToOrder({
          id: i.orderItemId,
          props: i.getContents(),
        })
      );
    }
  }
};

export default populateStreWithMockDataIfEmpty;
