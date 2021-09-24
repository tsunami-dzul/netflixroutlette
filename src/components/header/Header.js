import React from "react";
import { Search } from "../search/Search";
import "./header.css";

export const Header = () => {
  return (
    <div className="background-img">
      <div className="header">          
        <div className="header__title"><span className="header__title-bold">netflix</span>roulette</div>
        <div className="header__add-btn">
          <button className="btn btn-primary">+ Add movie</button>
        </div>
        <div className="header__search">
            <Search />
        </div>
      </div>
    </div>
  );
};
