import React from "react";
import pulpFiction from '../../images/pulpFiction.png';
import './movieItem.css';

export const MovieItem = () => {
  return (
    <div className="col-1-of-4">
      <div className="movie__item-image">
        <img src={pulpFiction} alt="" width="285" />
      </div>
      <div className="movie__item-summary">
        <div className="movie__item-desc">Pulp Fiction</div>
        <div className="movie__item-year">2004</div>
        <div className="movie__item-genre">Action & Adventure</div>
      </div>
    </div>
  );
};
