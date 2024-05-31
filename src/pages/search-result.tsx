import React from "react";

import { ActionsContainer, BackToHome, Illustration } from "@components";

import searching from "./../images/searching.svg";
import { useParams } from "react-router";

const blk = "search-result-page";
const SearchResult = () => {
  const { query } = useParams();

  console.log(query, "params");
  return (
    <main>
      <ActionsContainer>
        <BackToHome />
      </ActionsContainer>
      <Illustration
        alt="searching"
        path={searching}
        description="Searching"
      />
    </main>
  );
};

export default SearchResult;
