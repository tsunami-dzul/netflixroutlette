import React from "react";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="menu__options">
      <div className="menu__filter">
        <ul className="navigation">
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Documentary</a>
          </li>
          <li>
            <a href="#">Comedy</a>
          </li>
          <li>
            <a href="#">Horror</a>
          </li>
          <li>
            <a href="#">Crime</a>
          </li>
        </ul>
      </div>
      <div className="menu__sort">
        <ul className="navigation">
          <li>
            <a href="#">Sort by</a>
          </li>
          <li>
            <a href="#">Release date</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
