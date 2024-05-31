import React, { useState, useEffect } from "react";

import { Spinner } from "@base";
import { getMovies } from "@api/movies";
import { tMovie } from "@components/year-section";
import { YearSection } from "@components";

import "./style.scss";

type tMoviesContainerProps = {
  appliedFilter: number | undefined;
};

type tMoviesByYear = {
  year: number;
  movies: Array<tMovie>
}

const blk = "movies-container";
const MoviesContainer = ({ appliedFilter }: tMoviesContainerProps) => {
  const [currentYear, setCurrentYear] = useState(2012);
  const [loading, setLoading] = useState(true);
  const [moviesByYear, setMoviesByYear] = useState<Array<tMoviesByYear> | []>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const payload = {
        sort_by: "popularity.desc",
        primary_release_year: currentYear,
        page: 1,
        "vote_count.gte": 100,
        ...(appliedFilter && { with_genres: appliedFilter.toString() })
      };
      const fetchedMovies = await getMovies(payload);

      setMoviesByYear([{ year: currentYear, movies: fetchedMovies }]);
      setLoading(false);
    })();
  }, [currentYear, appliedFilter]);

  if (loading) {
    return (
      <div className={blk}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={blk}>
      {moviesByYear.map(({ year, movies }) => (
        <YearSection key={year} year={year} movies={movies} />
      ))}
    </div>
  );
};

export default MoviesContainer;
