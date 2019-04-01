import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HOME_ROUTE,
  JAVASCRIPT_ROUTE,
  JAVASCRIPT_ADD_ROUTE
} from "../constants";
import Home from "../Pages/Home";
import Javascript from "../Pages/Javascript";
import JavascriptAdd from "../Pages/Javascript/add";

export default function Router() {
  return (
    <Switch>
      <Route path={HOME_ROUTE} exact component={Home} />
      <Route path={JAVASCRIPT_ROUTE} exact component={Javascript} />
      <Route path={JAVASCRIPT_ADD_ROUTE} exact component={JavascriptAdd} />
    </Switch>
  );
}
