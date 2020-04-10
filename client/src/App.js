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

import populateStoreIfEmpty from "./debugging/mockData/populateStoreWithMockData";
import config from "./config";
import OrderItemsPage from "./components/OrderItemsList/OrderItemsPage";

const Redirect = ({ path }) => {
  useHistory().push(path);
  return <></>;
};

const App = () => {
  if (config.demoMode) populateStoreIfEmpty();

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect path="orders" />
          </Route>
          <Route exact path="/orders" component={OrdersList} />
          <Route path="/orders/:number" component={OrderItemsPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
