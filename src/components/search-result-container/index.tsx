import React, { useEffect, useRef, Dispatch } from "react";
import { useParams } from "react-router";

import { bemClass } from "@utils";
import { Container, Spinner } from "@base";
import { MovieCard, Illustration, SegmentTitle } from "@components";
import { tMovie } from "@components/year-section";

import noData from "./../../images/no-data.svg";

import "./style.scss";

const blk = "search-result-container";
const SearchResultContainer = ({ result }: { result: tMovie[] }) => {
  // Hooks
  const { query } = useParams();

  if (!result.length) {
    return (
      <Illustration
        alt="no movies found"
        path={noData}
        description="No Movies found"
      />
    );
  }

  return (
    <Container>
      <div className={blk}>
        <SegmentTitle>{`Search Result :  ${query}`}</SegmentTitle>
        <ul className={bemClass([blk, "movies"])}>
          {result.map((movie: tMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SearchResultContainer;
