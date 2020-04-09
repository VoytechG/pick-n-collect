import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./css/App.css";
import OrdersList from "./components/OrdersList/OrdersList";
import OrderItemsList from "./components/OrderItemsList/OrderItemsList";

import populateStoreIfEmpty from "./debugging/mockData/populateStoreWithMockData";
import isDev from "./debugging/devModeChecker";

const Redirect = ({ path }) => {
  useHistory().push(path);
  return <></>;
};

const App = () => {
  if (isDev()) populateStoreIfEmpty();

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect path="orders" />
          </Route>
          <Route exact path="/orders" component={OrdersList} />
          <Route path="/orders/:number" component={OrderItemsList} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
