import React from 'react';
import './search.css';

export const Search = () => {
    return (
        <div className="search">
            <div className="search__title">
                Find your movie
            </div>
            <div className="search__form">
                <div className="search__input">
                    <input type="text" placeholder="What do you want to watch" />
                </div>
                <div className="search__buttons">
                    <button className="btn btn-secondary">Search</button>
                </div>
            </div>
        </div>
    )
}
