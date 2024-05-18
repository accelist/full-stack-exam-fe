import { WithDefaultLayout } from "@/components/DefautLayout";
import { Page } from "@/types/Page";
import React, { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

interface CinemaResponse {
  regionName: string,
  regionId: string,
}

const CinemaPage: Page = () => {
  const [cinemas, setCinemas] = useState<CinemaResponse[] | null>();

  useEffect(() => {
    async function fetchCinema() {
      const cinemaHeader = await fetch('https://localhost:7001/api/Region');
      const cinemaResponse = await cinemaHeader.json();
      const cinemaDatas = cinemaResponse.regionDatas;
      setCinemas(cinemaDatas);
      console.log(cinemaDatas);
    }
    fetchCinema();
  }, [])


  return (
    <div className="h-screen w-full container mx-auto">
      <div className="object-contain mx-auto bg-no-repeat mt-5 bg-[url('https://cdn.cgv.id/assets/images/bg_showtimes_favorite.jpg')] w-[980px] h-[500px] p-10">
        <div className="flex flex-col justify-start">
          <img className="w-24" src="/images/cgv-logo.png" alt="" />
        </div>
        <div className="w-full h-1  my-5" />
        <ul className="flex flex-wrap gap-4 font-bold text-white justify-center">
          {cinemas && cinemas.map(cinema => {
            return (
              <li key={cinema.regionId} className="cursor-pointer">
                {cinema.regionName}
              </li>
            );
          })}
        </ul>
        <div className="w-full h-1 bg-[#727070] my-5" />
      </div>
      <h1
        className={"text-4xl font-bold text-center " + spaceGrotesk.className}
      >
        CINEMAS
      </h1>
    </div>
  );
};

CinemaPage.layout = WithDefaultLayout;
export default CinemaPage;
