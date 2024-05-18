import React from 'react';
import MovieList from './MovieList';
import { Movie } from '../types/Movie';
import styles from './styling.module.css';

const nowPlayingMovies1: Movie[] = [
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

const nowPlayingMovies2: Movie[] = [
    {
        id: '5',
        title: 'Movie 5',
        description: 'Movie 5 description',
        posterUrl: '/nowMovie5.jpg'
    },
    {
        id: '6',
        title: 'Movie 6',
        description: 'Movie 6 description',
        posterUrl: '/nowMovie6.jpg'
    },
    {
        id: '7',
        title: 'Movie 7',
        description: 'Movie 7 description',
        posterUrl: '/nowMovie7.jpg'
    },
    {
        id: '8',
        title: 'Movie 8',
        description: 'Movie 8 description',
        posterUrl: '/nowMovie8.jpg'
    },
];

const nowPlayingMovies3: Movie[] = [
    {
        id: '9',
        title: 'Movie 9',
        description: 'Movie 9 description',
        posterUrl: '/nowMovie9.jpg'
    },
    {
        id: '10',
        title: 'Movie 10',
        description: 'Movie 10 description',
        posterUrl: '/nowMovie10.jpg'
    },
    {
        id: '11',
        title: 'Movie 11',
        description: 'Movie 11 description',
        posterUrl: '/nowMovie11.jpg'
    },
    {
        id: '12',
        title: 'Movie 12',
        description: 'Movie 12 description',
        posterUrl: '/nowMovie12.jpg'
    },
];

const nowPlayingMovies4: Movie[] = [
    {
        id: '13',
        title: 'Movie 13',
        description: 'Movie 13 description',
        posterUrl: '/nowMovie13.jpg'
    },
    {
        id: '14',
        title: 'Movie 14',
        description: 'Movie 14 description',
        posterUrl: '/nowMovie14.jpg'
    },
    {
        id: '15',
        title: 'Movie 15',
        description: 'Movie 15 description',
        posterUrl: '/nowMovie15.jpg'
    },
    {
        id: '16',
        title: 'Movie 16',
        description: 'Movie 16 description',
        posterUrl: '/nowMovie16.jpg'
    },
];

const nowPlayingMovies5: Movie[] = [
    {
        id: '17',
        title: 'Movie 17',
        description: 'Movie 17 description',
        posterUrl: '/nowMovie17.jpg'
    },
    {
        id: '18',
        title: 'Movie 18',
        description: 'Movie 18 description',
        posterUrl: '/nowMovie18.jpg'
    },
    {
        id: '19',
        title: 'Movie 19',
        description: 'Movie 19 description',
        posterUrl: '/nowMovie19.jpg'
    },
    {
        id: '20',
        title: 'Movie 20',
        description: 'Movie 20 description',
        posterUrl: '/nowMovie20.jpg'
    },
];

const NowPlayingList: React.FC = () => {
    return (
        <div>
            <h2 className={styles['centerText']}>Now Playing</h2>
            <MovieList movies={nowPlayingMovies1} />
            <MovieList movies={nowPlayingMovies2} />
            <MovieList movies={nowPlayingMovies3} />
            <MovieList movies={nowPlayingMovies4} />
            <MovieList movies={nowPlayingMovies5} />
        </div>
    );
};

export default NowPlayingList;
