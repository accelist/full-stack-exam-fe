import { CGVLayout } from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { Pagination } from "antd";
import { useState } from "react";
import events from "@/data/eventData";
import Link from "next/link";

const EventPage: Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentData = events.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <>
            <div className="container mx-auto mt-8 flex justify-center items-center">
                <div className="max-w-4xl w-full">
                    {currentData.map((event) => (
                        <div key={event.id} className="mb-8">
                            <Link href={`/news/detail/${event.id}`} passHref>
                                <div className="group">
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            alt={event.title}
                                            src={event.image_header_url}
                                            style={{ width: '100%', height: 'auto' }}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="mt-4 border-t-2 border-gray-500 border-b-2 py-2 flex items-center justify-between cursor-pointer">
                                        <div className="flex-grow">
                                            <h2 className="text-lg">{event.title}</h2>
                                        </div>
                                        <span>Read more...</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto mt-8 flex justify-center">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={events.length}
                    onChange={handlePageChange}
                />
            </div>

        </>
    );
};

EventPage.layout = CGVLayout;
export default EventPage;
