import React from 'react';
import { CGVLayout } from '@/components/CGVLayout';
import { Page } from "@/types/Page";

const FeedbackPage: Page = () => {
    return (
        <div className="p-5">
            <div className="border-4 border-red-500 p-5 my-5 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Feedback</h2>
                <p className="mb-4">
                You can leave comments or feedback to our service by directly email us at support@cgv.id. We value every feedback we received. 
                And once in a while will have promotionnal gift to our eager customer. Grateful for every seconds you give us thoughts!
                </p>
            </div>

            <div className="grid gap-x-2 gap-y-4 grid-cols-5 max-w-4xl mx-auto mt-10">
                <div className="col-span-1 border-4 border-black">
                    <a href="https://x.com/CGV_ID" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn2.avada.io/media/resources/8N19La8.jpg" alt="Image 1" className="w-full h-full object-cover" />
                    </a>
                </div>
                <div className="col-span-3 border-4 border-black">
                    <iframe
                        title="YouTube video"
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/OOSir9RQMx0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="col-span-1 border-4 border-black">
                    <a href="/membership" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.cgv.id/uploads_v2/marketing/2103/BN202103231718336836.jpg" alt="Image 2" className="w-full h-full object-cover" />
                    </a>
                </div>
            </div>
        </div>
    );
};

FeedbackPage.layout = CGVLayout;
export default FeedbackPage;
