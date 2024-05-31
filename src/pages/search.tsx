import React from "react";

import { ActionsContainer, BackToHome, Illustration } from "@components";

import emptySearch from "./../images/empty-search.svg";

const blk = "search-page";
const Search = () => {
  return (
    <main>
      <ActionsContainer>
        <BackToHome />
      </ActionsContainer>
      <Illustration alt="empty-search" path={emptySearch} description="Waiting for Search"/>
    </main>
  );
};

export default Search;
