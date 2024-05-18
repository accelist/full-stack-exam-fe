import React from 'react';
import MovieList from './MovieList';
import { Movie } from '../types/Movie';
import styles from './styling.module.css';

const comingSoonMovies1: Movie[] = [
    {
        id: '1',
        title: 'Movie 1',
        description: 'Movie 1 description',
        posterUrl: '/soonMovie1.jpg'
    },
    {
        id: '2',
        title: 'Movie 2',
        description: 'Movie 2 description',
        posterUrl: '/soonMovie2.jpg'
    },
    {
        id: '3',
        title: 'Movie 3',
        description: 'Movie 3 description',
        posterUrl: '/soonMovie3.jpg'
    },
    {
        id: '4',
        title: 'Movie 4',
        description: 'Movie 4 description',
        posterUrl: '/soonMovie4.jpg'
    },
];

const comingSoonMovies2: Movie[] = [
    {
        id: '1',
        title: 'Movie 1',
        description: 'Movie 1 description',
        posterUrl: '/soonMovie5.jpg'
    },
    {
        id: '2',
        title: 'Movie 2',
        description: 'Movie 2 description',
        posterUrl: '/soonMovie6.jpg'
    },
    {
        id: '3',
        title: 'Movie 3',
        description: 'Movie 3 description',
        posterUrl: '/soonMovie7.jpg'
    },
    {
        id: '4',
        title: 'Movie 4',
        description: 'Movie 4 description',
        posterUrl: '/soonMovie8.jpg'
    },
];

const ComingSoonList: React.FC = () => {
    return (
        <div>
            <h2 className={styles['centerText']}>Coming Soon</h2>
            <MovieList movies={comingSoonMovies1} />
            <MovieList movies={comingSoonMovies2} />
        </div>
    );
};

export default ComingSoonList;
