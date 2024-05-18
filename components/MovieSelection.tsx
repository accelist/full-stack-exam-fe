import React from 'react';
import MovieList from './MovieList';
import { Movie } from '../types/Movie';
import styles from './styling.module.css';

const nowPlayingMovies: Movie[] = [
    {
        id: '1',
        title: 'Movie 1',
        description: 'Movie 1 description',
        posterUrl: '/nowMovie1.jpg'
    },
    {
        id: '2',
        title: 'Movie 2',
        description: 'Movie 2 description',
        posterUrl: '/nowMovie2.jpg'
    },
    {
        id: '3',
        title: 'Movie 3',
        description: 'Movie 3 description',
        posterUrl: '/nowMovie3.jpg'
    },
    {
        id: '4',
        title: 'Movie 4',
        description: 'Movie 4 description',
        posterUrl: '/nowMovie4.jpg'
    },
];

const MovieSelectionList: React.FC = () => {
    return (
        <div>
            <h2 className={styles['centerText']}>Movie Selection</h2>
            <MovieList movies={nowPlayingMovies} />
        </div>
    );
};

export default MovieSelectionList;
