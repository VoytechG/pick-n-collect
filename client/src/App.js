import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import "./App.css";
import { Order } from "./components/OrderList/Order";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/test1" component={Order} />
          <Route path="/test2">
            <h1>test 2</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
