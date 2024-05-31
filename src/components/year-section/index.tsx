import React from "react";

import { bemClass } from "@utils";
// import { movies } from "@data/movies";
import { MovieCard, SegmentTitle } from "@components";

import "./style.scss";

export type tMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type tYearSection = {
  movies: Array<tMovie>,
  year: number | string
};

const blk = "year-section";
const YearSection = ({ movies, year }: tYearSection) => {
  return (
    <section className={blk}>
      <SegmentTitle>{year}</SegmentTitle>
      <ul className={bemClass([blk, "movies-list"])}>
        {movies.map((movie: tMovie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </section>
  );
};

export default YearSection;
