import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import "./App.css";
import OrdersList from "./components/OrdersList/OrdersList";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/orders" component={OrdersList} />
          <Route path="/test2">
            <h1>test 2</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
