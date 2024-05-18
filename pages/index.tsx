import React, { useRef } from 'react';
import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { Row, Col, Carousel, Button } from "antd";
import movies from "@/data/movieData";
import { useState } from "react";
import promotionData from "@/data/promotionData";
import newsData from "@/data/eventData";
import Link from 'next/link';

const Home: Page = () => {
    const imageLinks = [
        "https://travelmaker1.b-cdn.net/wp-content/uploads/2023/08/Aug-23-CGV-720x405-3.png",
        "https://travelmaker1.b-cdn.net/wp-content/uploads/2023/08/Aug-23-CGV-720x405-3.png",
        "https://travelmaker1.b-cdn.net/wp-content/uploads/2023/08/Aug-23-CGV-720x405-3.png"
    ];

    const imageLinkUrls = [
        "https://www.cgv.id/app-ticket",
        "https://www.cgv.id/app-jajan",
        "https://www.cgv.id/app-fitur"
    ];

    const totalMovies = movies.length;
    const moviesPerCarousel = 4;
    const totalCarousels = Math.ceil(totalMovies / moviesPerCarousel);

    const carouselRef = useRef<any>(null);

    const handleNextCarousel = () => {
        carouselRef.current.next();
    };

    const handlePrevCarousel = () => {
        carouselRef.current.prev();
    };

    const [currentCategory, setCurrentCategory] = useState<'promotions' | 'news'>('promotions');
    const data = currentCategory === 'promotions' ? promotionData.slice(0, 4) : newsData.slice(0, 4);

    const detailLink = currentCategory === 'promotions' ? '/promotion/detail/' : '/news/detail/';

    return (
        <div>
            
            <div className="container mx-auto mt-8" style={{ padding: '0 20px' }}>
                <Row gutter={[16, 16]}>
                    
                    <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                        <Carousel autoplay autoplaySpeed={3000} style={{ width: '100%' }}>
                            {movies.slice(0, 5).map((movie) => (
                                <div key={movie.id}>
                                    <a href={`/movies/info/${movie.id}`}>
                                        <img
                                            alt={movie.title}
                                            src={movie.posterUrl}
                                            style={{ width: '100%', maxHeight: '380px', objectFit: 'cover' }}
                                        />
                                    </a>
                                </div>
                            ))}
                        </Carousel>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                        <div style={{ height: '380px', overflow: 'hidden' }}>
                            {imageLinks.map((link, index) => (
                                <div key={index} style={{ marginBottom: '8px', height: 'calc((380px - 16px) / 3)' }}>
                                    <a href={imageLinkUrls[index]}>
                                        <img
                                            alt={`Image ${index + 1}`}
                                            src={link}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Col>

                </Row>
            </div>

            
            <div className="container mx-auto mt-8" style={{ padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>MOVIE SELECTION</h2>
                <Carousel ref={carouselRef} autoplay={false} style={{ width: '100%' }} dotPosition="bottom">
                    {[...Array(totalCarousels)].map((_, carouselIndex) => (
                        <div key={carouselIndex}>
                            <Row gutter={[16, 16]} justify="center">
                                {movies.slice(carouselIndex * moviesPerCarousel, (carouselIndex + 1) * moviesPerCarousel).map((movie) => (
                                    <Col key={movie.id} xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <a href={`/movies/info/${movie.id}`}>
                                            <img
                                                alt={movie.title}
                                                src={movie.posterUrl}
                                                style={{ width: '100%', height: 'auto', marginBottom: '8px' }}
                                            />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Carousel>
                <div className="flex justify-end">
                    <Button type="primary" onClick={handlePrevCarousel} className="bg-orange-800 mr-2 hover:bg-orange-600">← Previous</Button>
                    <Button type="primary" onClick={handleNextCarousel} className="bg-orange-800 hover:bg-orange-600">Next →</Button>
                </div>
            </div>

           
            <div className="container mx-auto mt-8" style={{ padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>CGV UPDATES</h2>
                <div className="flex justify-center space-x-8 mb-8">
                    <div
                        className={`cursor-pointer text-lg font-bold px-4 py-2 rounded-lg ${currentCategory === 'promotions' ? 'text-red-500 border-b-2 border-red-500' : 'text-black hover:text-gray-500'}`}
                        onClick={() => setCurrentCategory('promotions')}
                    >
                        Promotions
                    </div>
                    <div
                        className={`cursor-pointer text-lg font-bold px-4 py-2 rounded-lg ${currentCategory === 'news' ? 'text-red-500 border-b-2 border-red-500' : 'text-black hover:text-gray-500'}`}
                        onClick={() => setCurrentCategory('news')}
                    >
                        News
                    </div>
                </div>
                <Carousel autoplay={false} style={{ width: '100%' }} dotPosition="bottom">
                    {[...Array(1)].map((_, index) => (
                        <div key={index}>
                            <Row gutter={[16, 16]} justify="center">
                                {data.map((item) => (
                                    <Col key={item.id} xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Link href={`${detailLink}${item.id}`} passHref>
                                            <img
                                                alt={item.title}
                                                src={item.image_header_url}
                                                style={{ width: 'auto', height: '240px', marginBottom: '8px' }}
                                            />
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

Home.layout = CGVLayout;
export default Home;
