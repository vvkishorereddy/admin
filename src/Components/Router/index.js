import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import {
  HOME_ROUTE,
  JAVASCRIPT_ROUTE,
  JAVASCRIPT_ADD_ROUTE
} from "../../constants";

import WithSuspense from "../../HOC/withSuspense";

const Home = WithSuspense(lazy(() => import("../Pages/Home")));
const Javascript = WithSuspense(lazy(() => import("../Pages/Javascript")));
const JavascriptAdd = WithSuspense(
  lazy(() => import("../Pages/Javascript/add"))
);

export default function Router() {
  return (
    <Switch>
      <Route path={HOME_ROUTE} exact component={Home} />
      <Route path={JAVASCRIPT_ROUTE} exact component={Javascript} />
      <Route path={JAVASCRIPT_ADD_ROUTE} exact component={JavascriptAdd} />
    </Switch>
  );
}
