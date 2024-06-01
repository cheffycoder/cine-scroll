import React, { useState } from "react";
import { BrowserRouter as RouteProvider } from "react-router-dom";

import Router from "@router";
import { Header } from "@components";
import { tMovie } from "@components/year-section";

import "./../sass/global.scss";

const App = () => {
  // Local states to share between header and search-result page
  const [searchData, setSearchData] = useState<Array<tMovie> | []>([]);
  const [searching, setSearching] = useState(true);

  return (
    <RouteProvider basename="/">
      <Header setSearchData={setSearchData} setSearching={setSearching}/>
      <Router searchData={searchData} searching={searching}/>
    </RouteProvider>
  );
};

export default App;
