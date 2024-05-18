import { WithDefaultLayout } from "@/components/DefautLayout";
import { Card } from "@/components/ui/card";
import { Page } from "@/types/Page";
import { CardBody } from "@material-tailwind/react";
import { Space_Grotesk } from "next/font/google";
import { useState, useEffect } from "react";
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500']
})

interface Movie {
  movieId: string,
  posterUrl: string,
}

const MoviePage: Page = () => {
  const [upComingMovie, setUpcomingMovie] = useState<Movie[] | null>(null);
  const [showingMovie, setShowingMovie] = useState<Movie[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://localhost:7001/api/movie/upcoming');
      const response = await data.json();
      const responseUpComing = response.upcomingMovies;

      const showingMovieData = await fetch('https://localhost:7001/api/movie/showing');
      const responseShowingMovieData = await showingMovieData.json();
      const responseShowing = responseShowingMovieData.isShowingMovies;

      setUpcomingMovie(responseUpComing);
      setShowingMovie(responseShowing);
    }
    fetchData();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="grid grid-cols-4 gap-2 container mx-auto">
        {showingMovie && showingMovie.map(mv => {
          return (
            <Link key={mv.movieId} href={`/movies/${mv.movieId}`}>
              <Card>
                <CardBody>
                  <img className="w-full rounded-md" src={mv.posterUrl} alt="" />
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </div>
      <h1 className={"text-2xl font-bold my-10 " + spaceGrotesk.className}>COMING SOON</h1>
      <div className="grid grid-cols-4 gap-2 container mx-auto">
        {upComingMovie && upComingMovie.map(mv => {
          return (
            <Link key={mv.movieId} href={`/movies/${mv.movieId}`}>
              <Card>
                <CardBody>
                  <img className="w-full rounded-md" src={mv.posterUrl} alt="" />
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

MoviePage.layout = WithDefaultLayout;
export default MoviePage;
