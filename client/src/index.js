import React from "react";
import ReactDOM from "react-dom";
// import { createStore, StoreProvider, persist } from "easy-peasy";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import storeAndPersistor from "./store/store";

import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = storeAndPersistor;

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
