import React from 'react';
import Link from 'next/link';

interface MovieCardProps {
    id: string;
    posterUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, posterUrl }) => {
    return (
        <Link href={`/movies/${id}`}>
            <div className="movie-card">
                <img src={posterUrl} />
            </div>
        </Link>
    );
};

export default MovieCard;
