import React, { Dispatch } from "react";

import { tMovie } from "@components/year-section";
import SearchResultContainer from "@components/search-result-container";
import { ActionsContainer, BackToHome, Illustration } from "@components";

import searchingMovie from "./../images/searching.svg";

const blk = "search-result-page";
const SearchResult = ({
  searchData,
  searching,
}: {
  searchData: Array<tMovie>;
  searching: boolean;
}) => {

  return (
    <main>
      <ActionsContainer>
        <BackToHome />
      </ActionsContainer>
      {searching ? (
        <Illustration
          alt="searching"
          path={searchingMovie}
          description="Searching"
        />
      ) : (
        <SearchResultContainer
          result={searchData}
        />
      )}
    </main>
  );
};

export default SearchResult;
