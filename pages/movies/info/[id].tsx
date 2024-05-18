import React from 'react';
import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import movies from "@/data/movieData";

const MovieInfoPage: Page = () => {
    const router = useRouter();
    const { id } = router.query;
    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
        return <div>Movie not found.</div>;
    }

    return (
        <div className="container mx-auto mt-8 px-4">
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12} className="flex justify-center items-center">
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="w-full h-auto"
                        style={{ maxWidth: '300px', objectFit: "contain" }}
                    />
                </Col>
                <Col xs={24} md={12} className="flex justify-center items-center">
                    <div className="video-container" style={{ width: '100%' }}>
                        <iframe
                            width="100%"
                            height="315"
                            src={movie.trailerUrl.replace("watch?v=", "embed/")}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={movie.title}
                        ></iframe>
                    </div>
                </Col>
            </Row>
            <div className="my-4">
                <hr />
                <h2 className="text-red-500 text-3xl">{movie.title}</h2>
                <hr />
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                    <p>Director: {movie.director.join(", ")}</p>
                    <p>Starring: {movie.cast.join(", ")}</p>
                    <p>Censor Rating: {movie.censor_rating}</p>
                    <p>Genre: {movie.genre.join(", ")}</p>
                    <p>Language: {movie.language}</p>
                    <p>Subtitle: {movie.subtitle}</p>
                    <p>Duration: {movie.duration} Minutes</p>
                </Col>
                <Col xs={24} md={16}>
                    <p className="text-lg">{movie.synopsys}</p>
                </Col>
            </Row>
        </div>
    );
};

MovieInfoPage.layout = CGVLayout;
export default MovieInfoPage;
