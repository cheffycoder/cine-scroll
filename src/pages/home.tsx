import React, { useEffect, useState } from "react";

import { getGenres } from "@api/genres";
import { Container, Spinner } from "@base";
import { ActionsContainer, FilterGroup, MoviesContainer } from "@components";

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
      setGenres([{id: 0, name: "All"} ,...genres]);
      setAppliedFilter(0);
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
