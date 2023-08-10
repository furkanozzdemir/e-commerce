import React from "react";

import Product from "./products/Product";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  );
}

export default Home;
