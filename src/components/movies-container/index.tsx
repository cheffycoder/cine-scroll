import React, { useState, useEffect, useRef } from "react";

import { Spinner } from "@base";
import { getMovies } from "@api/movies";
import { tMovie } from "@components/year-section";
import { YearSection } from "@components";
import { bemClass } from "@utils";

import "./style.scss";

type tMoviesContainerProps = {
  appliedFilter: number | undefined;
};

type tMoviesByYear = {
  year: number;
  movies: Array<tMovie>;
};

const blk = "movies-container";
const MoviesContainer = ({ appliedFilter }: tMoviesContainerProps) => {
  // Local states
  const [currentYear, setCurrentYear] = useState(2012);
  const [loading, setLoading] = useState(true);
  const [moviesByYear, setMoviesByYear] = useState<Array<tMoviesByYear> | []>(
    []
  );

  console.log(moviesByYear, "moviesByYear");

  // Local ref
  const spinnerRef = useRef(null);

  // Local variables
  const presentYear = new Date().getFullYear();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setCurrentYear((prevYear) => {
          if (prevYear !== presentYear) {
            return prevYear + 1;
          }
          return prevYear;
        });
      }
    };

    const options = {};
    const observer = new IntersectionObserver(handleIntersection, options);

    // Check if spinnerRef.current is not null
    if (spinnerRef.current) {
      observer.observe(spinnerRef.current);
    }

    // Clean up function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [loading]);

  const fetchMovies = async (year: number, genre?: number) => {
    const payload = {
      sort_by: "popularity.desc",
      primary_release_year: year,
      page: 1,
      "vote_count.gte": 100,
      ...(genre && { with_genres: genre.toString() }),
    };
    return await getMovies(payload);
  };

  const loadMovies = async (year: number, genre?: number) => {
    const fetchedMovies = await fetchMovies(year, genre);
    setMoviesByYear((_prevMovies) => [{ year: currentYear, movies: fetchedMovies }]);
  };

  const loadMoreMovies = async (year: number, genre?: number) => {
    const fetchedMovies = await fetchMovies(year, genre);
    setMoviesByYear((prevData) => [
      ...prevData,
      { year: currentYear, movies: fetchedMovies },
    ]);
  };

  useEffect(() => {
    !loading && loadMoreMovies(currentYear, appliedFilter);
  }, [currentYear]);

  useEffect(() => {
    setLoading(true);
    loadMovies(currentYear, appliedFilter);
    setLoading(false);
  }, [appliedFilter]);

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
      {currentYear !== presentYear && (
        <div className={bemClass([blk, "spinner"])} ref={spinnerRef}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default MoviesContainer;
