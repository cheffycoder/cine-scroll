import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Spinner } from "@base";

const Home = lazy(
  async () => await import(/* webpackChunkName: 'home' */ "../pages/home")
);
const Search = lazy(
  async () => await import(/* webpackChunkName: 'search' */ "../pages/search")
);
const SearchResult = lazy(
  async () => await import(/* webpackChunkName: 'search' */ "../pages/search-result")
);

const blk = "page-router";

const PageRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
    </Suspense>
  );
};

export default PageRouter;
