import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}
