import React from "react";
import Routes from "../../Routes";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Nav } from "./styles";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Routes />
      {/* <PostsList /> */}
      <Footer />
    </BrowserRouter>
  );
}
