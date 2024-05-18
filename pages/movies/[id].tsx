import { WithDefaultLayout } from '@/components/DefautLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface MovieDetail {
    posterUrl: string;
    trailerUrl: string;
    movieTitle: string;
    censorRating: string;
    genreName: string;
    language: string;
    subtitle: string;
    duration: number;
    synopsis: string;
    directorName: string;
    cast: string[] | undefined; // Allow cast to be undefined
}

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const { id } = router.query;

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await fetch(`https://localhost:7001/api/movie/${id}`);

                const data = await response.json();
                console.log(data);
                setMovieDetail(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie detail:', error);
                setLoading(false);
            }
        };

        fetchMovieDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={movieDetail?.posterUrl}
                    alt="Movie Poster"
                    className="w-full h-auto"
                />
                <div className="p-4">
                    <h1 className="text-2xl font-semibold mb-2">{movieDetail?.movieTitle}</h1>
                    <p><strong>Director:</strong> {movieDetail?.directorName}</p>
                    <p><strong>Starring:</strong> {movieDetail?.cast?.join(', ')}</p>
                    <p><strong>Censor Rating:</strong> {movieDetail?.censorRating}</p>
                    <p><strong>Genre:</strong> {movieDetail?.genreName}</p>
                    <p><strong>Language:</strong> {movieDetail?.language}</p>
                    <p><strong>Subtitle:</strong> {movieDetail?.subtitle}</p>
                    <p><strong>Duration:</strong> {movieDetail?.duration} minutes</p>
                    <p><strong>Synopsis:</strong> {movieDetail?.synopsis}</p>
                </div>
            </div>
        </div>
    );
}

MovieDetail.layout = WithDefaultLayout;
export default MovieDetail;
