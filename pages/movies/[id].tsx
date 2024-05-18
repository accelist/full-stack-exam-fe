import { GetStaticPaths, GetStaticProps } from 'next';
import { Movie } from '../../types/Movie';
import moviesData from '../../data/movies';

interface MovieDetailProps {
    movie: Movie | undefined;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
    if (!movie) {
        return <p>Movie not found.</p>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.posterUrl} alt={`${movie.title} poster`} />
            <p>{movie.description}</p>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = moviesData.map((movie) => ({
        params: { id: movie.id }
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params!;
    const movie = moviesData.find((movie) => movie.id === id);

    return { props: { movie } };
};

export default MovieDetail;
