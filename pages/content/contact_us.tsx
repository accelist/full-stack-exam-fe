import React from 'react';
import { CGVLayout } from '@/components/CGVLayout';
import { Page } from "@/types/Page";

const ContactUs: Page = () => {
    return (
        <div className="p-5">
            <div className="border-4 border-red-500 p-5 my-5 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Contact CGV CINEMAS:</h2>
                <p className="mb-4">
                    Call Center<br />callcenter@cgv.id
                </p>
                <p className="mb-4">
                    Email<br />+6221-2920-0100
                </p>
                <p className="mb-4">
                Call Center Operating Hours<br />Monday - Sunday 11.00 - 20.00
                </p>
                <p>
                    CGV Cinemas HQ Office<br />
                    AIA Central 26th floor<br />
                    Jl. Jend. Sudirman Kav. 48A – Jakarta Selatan 12930
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

ContactUs.layout = CGVLayout;
export default ContactUs;
