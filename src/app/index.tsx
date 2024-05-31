import React from "react";
import { BrowserRouter as RouteProvider } from "react-router-dom";

import { Header } from "@components";
import Router from "@router";

import "./../sass/global.scss"

const App = () => {
  return (
    <RouteProvider basename="/">
      <Header />
      <Router />
    </RouteProvider>
  );
};

export default App;
