import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { useState } from "react";
import Link from "next/link";
import auditoriumData from "@/data/auditoriumData";
import sportData from "@/data/sportData";

const SpecialPage: Page = () => {
    const [currentCategory, setCurrentCategory] = useState<'auditoriums' | 'sports'>('auditoriums');
    const data = currentCategory === 'auditoriums' ? auditoriumData : sportData;

    return (
        <>
            <div className="container mx-auto mt-8 flex justify-center items-center">
                <div className="max-w-4xl w-full">
                    <div className="flex justify-center space-x-8 mb-8">
                        <div
                            className={`cursor-pointer ${currentCategory === 'auditoriums' ? 'text-red-500 border-b-2 border-red-500' : 'text-black hover:text-gray-500'}`}
                            onClick={() => setCurrentCategory('auditoriums')}
                        >
                            Auditoriums
                        </div>
                        <div
                            className={`cursor-pointer ${currentCategory === 'sports' ? 'text-red-500 border-b-2 border-red-500' : 'text-black hover:text-gray-500'}`}
                            onClick={() => setCurrentCategory('sports')}
                        >
                            Sports
                        </div>
                    </div>

                    {data.map((audiOrSport) => (
                        <div key={audiOrSport.id} className="mb-8 text-left overflow-hidden">
                            <Link href={`/special/detail/${audiOrSport.id}`} passHref>
                                <div className="group">
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            alt={audiOrSport.title}
                                            src={audiOrSport.image_header_url}
                                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <h2 className="text-red-500 cursor-pointer font-extrabold text-xl">{audiOrSport.title}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

SpecialPage.layout = CGVLayout;
export default SpecialPage;
