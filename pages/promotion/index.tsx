import {CGVLayout} from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { Pagination } from "antd";
import { useState } from "react";
import promotions from "@/data/promotionData";
import Link from "next/link";

const PromotionPage: Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentData = promotions.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <>
            <div className="container mx-auto mt-8 flex justify-center items-center">
                <div className="max-w-4xl w-full">
                    {currentData.map((promotion) => (
                        <div key={promotion.id} className="mb-8">
                            <Link href={`/promotion/detail/${promotion.id}`} passHref>
                                <div className="group">
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            alt={promotion.title}
                                            src={promotion.image_header_url}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="mt-4 border-t-2 border-gray-500 border-b-2 py-2 flex items-center justify-between cursor-pointer">
                                        <div className="flex-grow">
                                            <h2>{promotion.title}</h2>
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
                    total={promotions.length}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
};

PromotionPage.layout = CGVLayout;
export default PromotionPage;
