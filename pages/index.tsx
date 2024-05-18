import { WithDefaultLayout } from "../components/DefautLayout";
import { Page } from "../types/Page";
import React, { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

interface Movie {
  movieId: string,
  posterUrl: string,
}

const IndexPage: Page = () => {
  // const [upComingMovie, setUpcomingMovie] = useState<Movie[] | null>([]);
  const [showingMovie, setShowingMovie] = useState<Movie[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      // const data = await fetch('https://localhost:7001/api/movie/upcoming');
      // const response = await data.json();
      // const responseUpComing = response.upcomingMovieS;

      const showingMovieData = await fetch('https://localhost:7001/api/movie/showing');
      const responseShowingMovieData = await showingMovieData.json();
      const responseShowing = responseShowingMovieData.isShowingMovies;

      // setUpcomingMovie(responseUpComing);
      setShowingMovie(responseShowing);
    }
    fetchData();
  }, [])



  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div >
      <div className="absolute -z-1 w-screen h-96 bg-[url('https://cdn.cgv.id/assets/images/bg_c_bricks.png')]"></div>
      <div className="container mx-auto min-h-full mb-24 mt-3 relative">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full aspect-video relative"
        >
          <CarouselContent>
            {showingMovie && showingMovie.slice(0, 10).map(mv => {
              return (
                <CarouselItem key={mv.movieId}>
                  <img
                    className="w-full aspect-video rounded-xl"
                    src={mv.posterUrl}
                    alt=""
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </Carousel>
        <section>
          <h1
            className={
              "text-center text-3xl font-bold" + " " + spaceGrotesk.className
            }
          >
            MOVIE SELECTION
          </h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24007500.jpg?version=1"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24013200.jpg?version=2"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24009700.jpg?version=3"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24012100.jpg?version=1"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24012800.jpg?version=2"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24011300.jpg?version=1"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24014600.jpg?version=2"
                  alt=""
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <img
                  className="rounded-md"
                  src="https://cdn.cgv.id/uploads_v2/movie/compressed/24006500.jpg?version=2"
                  alt=""
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section>
          <h1
            className={
              "text-center text-3xl font-bold" + " " + spaceGrotesk.className
            }
          >
            CGV Update
          </h1>
          <div className="flex justify-center gap-2">
            <img
              className="rounded-md"
              src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405100933495889_thumb.jpg"
              alt=""
            />
            <img
              className="rounded-md"
              src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021_thumb.jpg"
              alt=""
            />
            <img
              className="rounded-md"
              src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021_thumb.jpg"
              alt=""
            />
            <img
              className="rounded-md"
              src="https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021_thumb.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

IndexPage.layout = WithDefaultLayout;
export default IndexPage;
