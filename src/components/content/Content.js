import React from 'react';
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary';
import { Menu } from '../menu/Menu';
import { MovieList } from '../movieList/MovieList';
import './content.css';

export const Content = () => {
    return (
        <div className="content">
            <Menu />

            <div className="content__movie-total">
                <span className="content__movie-total-bold">39</span> movies found
            </div>

            <div className="content__movie-list">
                <ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>
            </div>
        </div>
    )
}
