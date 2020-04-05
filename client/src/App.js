import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./App.css";
import OrderList from "./components/OrderList/OrderList";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/test1" component={OrderList} />
          <Route path="/test2">
            <h1>test 2</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
