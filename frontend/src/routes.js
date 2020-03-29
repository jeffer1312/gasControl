import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sells from "./pages/Sells";
import NewSells from "./pages/NewSells";
import Clients from "./pages/Clients";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Sells}></Route>
        <Route path='/newsells' exact component={NewSells}></Route>
        <Route path='/clients' exact component={Clients}></Route>
      </Switch>
    </BrowserRouter>
  );
}
