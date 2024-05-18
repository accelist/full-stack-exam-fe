import { useState } from "react";
import { cinemaData } from "@/data/cinemaData";
import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";

const SnackPage: Page = () => {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [selectedCinema, setSelectedCinema] = useState<string | null>(null);

    const cities = Object.keys(cinemaData);
    const cinemas = selectedCity ? cinemaData[selectedCity] : [];

    const handleCityClick = (city: string) => {
        setSelectedCity(city);
        setSelectedCinema(null);
    };

    const handleCinemaClick = (cinema: string) => {
        setSelectedCinema(cinema);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b text-white">
            <div className="container mx-auto p-4">
                <div className="bg-neutral-700 p-8 rounded-lg shadow-lg border border-gray-300">
                    <div className="flex justify-start mb-6">
                        <img
                            src="https://w1.pngwing.com/pngs/519/64/png-transparent-cinema-logo-cj-cgv-cj-group-film-seoul-lotte-cinema-ho-chi-minh-city-vietnam.png"
                            alt="CGV Logo"
                            className="h-20 w-auto"
                        />
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="mb-6 grid grid-cols-3 md:grid-cols-9 gap-4">
                        {cities.map(city => (
                            <div
                                key={city}
                                className={`cursor-pointer p-2 text-center bg-neutral-700 rounded-lg hover:bg-gray-700 transition-all ${
                                    selectedCity === city ? "border-b-4 border-white bg-gray-700" : ""
                                }`}
                                onClick={() => handleCityClick(city)}
                            >
                                {city}
                            </div>
                        ))}
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div>
                        {selectedCity && (
                            <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
                                {cinemas.map(cinema => (
                                    <div
                                        key={cinema}
                                        className={`cursor-pointer p-2 text-center bg-neutral-700 rounded-lg hover:bg-gray-700 transition-all ${
                                            selectedCinema === cinema ? "border-b-4 border-white bg-gray-700" : ""
                                        }`}
                                        onClick={() => handleCinemaClick(cinema)}
                                    >
                                        {cinema}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

SnackPage.layout = CGVLayout;
export default SnackPage;
