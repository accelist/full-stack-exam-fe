import React from 'react';
import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { Row, Col } from "antd";
import movies from "@/data/movieData";

const NowPlaying: Page = () => {
  const totalMovies = movies.length;
  const moviesPerRow = 4;
  const totalRows = Math.ceil(totalMovies / moviesPerRow);

  return (
    <div className="container mx-auto mt-8" style={{ padding: '0 20px' }}>
      {[...Array(totalRows)].map((_, rowIndex) => (
        <Row key={rowIndex} gutter={[2, 8]} justify="center">
          {movies.slice(rowIndex * moviesPerRow, (rowIndex + 1) * moviesPerRow).map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={12} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center' }}>
              <a href={`/movies/info/${movie.id}`}>
                <img
                  alt={movie.title}
                  src={movie.posterUrl}
                  style={{ maxWidth: '95%', maxHeight: '380px', width: 'auto', height: 'auto', marginBottom: '8px' }}
                />
              </a>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

NowPlaying.layout = CGVLayout;
export default NowPlaying;
