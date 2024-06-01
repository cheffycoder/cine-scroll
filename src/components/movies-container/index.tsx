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
  const [_minYear, setMinYear] = useState(2012);
  const [maxYear, setMaxYear] = useState(2012);
  const [loading, setLoading] = useState(true);
  const [moviesByYear, setMoviesByYear] = useState<Array<tMoviesByYear> | []>([]);

  // Local variables
  const presentYear = new Date().getFullYear();

  // Local ref
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef(null);
  
  const handleTopIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setMinYear((prevYear) => {
        loadPrevMovies(prevYear - 1, appliedFilter);
        return prevYear - 1;
      });
    }
  };

  const handleBottomIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setMaxYear((prevYear) => {
        if (prevYear !== presentYear) {
          loadMoreMovies(prevYear + 1, appliedFilter);
          return prevYear + 1;
        }
        return prevYear;
      });
    }
  };

  useEffect(() => {

    const options = {};
    const topObserver = new IntersectionObserver(handleTopIntersection, options);
    const bottomObserver = new IntersectionObserver(handleBottomIntersection, options);

    // Check if spinnerRef.current is not null
    if (topRef.current) {
      topObserver.observe(topRef.current);
    }

    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }

    // Clean up function
    return () => {
      if (topObserver) {
        topObserver.disconnect();
      }

      if(bottomObserver){
        bottomObserver.disconnect();
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
    setLoading(true);
    const fetchedMovies = await fetchMovies(year, genre);
    setMoviesByYear((_prevMovies) => [{ year: year, movies: fetchedMovies }]);
    setLoading(false);
  };

  const loadPrevMovies = async (year: number, genre?: number) => {

    if (containerRef.current) {
      const previousScrollHeight = containerRef.current.scrollHeight;
      const previousScrollTop = containerRef.current.scrollTop;

      const fetchedMovies = await fetchMovies(year, genre);

      setMoviesByYear((prevData) => {
        const newMovies = [{ year: year, movies: fetchedMovies }, ...prevData];
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const newScrollHeight = containerRef.current.scrollHeight;
            const newScrollTop = previousScrollTop + (newScrollHeight - previousScrollHeight);

            window.scrollTo(0, newScrollTop);
          }
        });
        console.groupEnd();
        return newMovies;
      });
    }
  };

  const loadMoreMovies = async (year: number, genre?: number) => {
    const fetchedMovies = await fetchMovies(year, genre);
    setMoviesByYear((prevData) => [
      ...prevData,
      { year: year, movies: fetchedMovies },
    ]);
  };

  useEffect(() => {
    loadMovies(2012, appliedFilter);
  }, [appliedFilter]);

  if (loading) {
    return (
      <div className={blk}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={blk} ref = {containerRef}>
      <div className={bemClass([blk, "spinner"])} ref={topRef}>
      </div>
      {moviesByYear.map(({ year, movies }) => (
        <YearSection key={year} year={year} movies={movies} />
      ))}
      {maxYear !== presentYear && (
        <div className={bemClass([blk, "spinner"])} ref={bottomRef}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default MoviesContainer;