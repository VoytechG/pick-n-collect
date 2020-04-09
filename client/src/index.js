import React from "react";
import ReactDOM from "react-dom";
// import { createStore, StoreProvider, persist } from "easy-peasy";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store";
import { exampleOrderAndItems } from "./debugging/exampleOrders";
import { addOrder } from "./store/actions/orders";
import { addItemToOrder } from "./store/actions/orderItems";

const { orders, items } = exampleOrderAndItems;

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

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
