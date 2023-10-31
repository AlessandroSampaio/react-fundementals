import React from "react";
import { Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/home";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
    </>
  );
}
