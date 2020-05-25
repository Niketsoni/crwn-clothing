import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shope.component";
import Header from "./components/header/header.component.jsx";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.location.pathname} Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/shop/jackets" component={HatsPage} />
        <Route path="/shop/sneakers" component={HatsPage} />
        <Route path="/shop/womens" component={HatsPage} />
        <Route path="/shop/mens" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
