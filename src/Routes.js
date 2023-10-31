import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/home";
import Posts from "./pages/Posts";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}
