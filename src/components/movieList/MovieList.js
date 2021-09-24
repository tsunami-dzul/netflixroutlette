import React from "react";
import { MovieItem } from "../movieItem/MovieItem";
import "./movieList.css";

export const MovieList = () => {
  return (
    <>
      <div className="row">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
      <div className="row">
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </>
  );
};
