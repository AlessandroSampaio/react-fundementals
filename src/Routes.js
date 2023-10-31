import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  );
}
