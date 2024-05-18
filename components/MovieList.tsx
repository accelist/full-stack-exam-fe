import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types/Movie';

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard 
                    key={movie.id}
                    id={movie.id}
                    posterUrl={movie.posterUrl}
                />
            ))}
        </div>
    );
};

export default MovieList;
