import React, { useEffect, useState, useRef } from "react";

import { Container } from "@base";
import { ActionsContainer, FilterGroup, SegmentTitle } from "@components";

// import { genres } from "./../data/filters";
// import { movielist } from "@data/movies";
import MovieYearSection from "@components/year-section";
import MoviesContainer from "@components/movies-container";
import { getGenres } from "@api/genres";
import { Spinner } from "@base";

type tGenre = {
  id: number;
  name: string;
};

const blk = "home-page";
const Home = () => {
  // Local states
  const [genres, setGenres] = useState<tGenre[] | []>([]);
  const [appliedFilter, setAppliedFilter] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const genres = await getGenres();
      setGenres(genres);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <main className={blk}>
        <Spinner />
      </main>
    );
  }

  return (
    <main className={blk}>
      <ActionsContainer>
        <FilterGroup
          filters={genres}
          appliedFilter={appliedFilter}
          setAppliedFilter={setAppliedFilter}
        />
      </ActionsContainer>
      <Container>
        <MoviesContainer appliedFilter={appliedFilter} />
      </Container>
    </main>
  );
};

export default Home;
