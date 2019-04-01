import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOME_ROUTE, JAVASCRIPT_ROUTE } from "../constants";
import Home from "../Pages/Home";
import Javascript from "../Pages/Javascript";

export default function Router() {
  return (
    <Switch>
      <Route path={HOME_ROUTE} exact component={Home} />
      <Route path={JAVASCRIPT_ROUTE} exact component={Javascript} />
    </Switch>
  );
}
