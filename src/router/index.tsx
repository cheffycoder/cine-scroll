import React, { Suspense, lazy, Dispatch } from "react";
import { Routes, Route } from "react-router-dom";

import { Spinner } from "@base";
import { tMovie } from "@components/year-section";

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

const PageRouter = ({
  searchData,
  searching
}: {
  searchData: Array<tMovie>;
  searching: boolean
}) => {
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
        <Route
          path="/search/:query"
          element={
            <SearchResult
              searchData={searchData}
              searching={searching}
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default PageRouter;
