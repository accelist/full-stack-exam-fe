import React from 'react';
import { CGVLayout } from '@/components/CGVLayout';
import { Page } from "@/types/Page";

const CareersPage: Page = () => {
    return (
        <div className="p-5">
            <div className="border-4 border-red-500 p-5 my-5 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">WHO ARE WE?</h2>
                <p className="mb-4">
                    Welcome to CGV CINEMAS. In CGV CINEMAS the terms of Auditorium is what they call Theatre somewhere else, and it is where we screen all of our movies on the largest screens in Indonesia. CGV CINEMAS presents the concept of Cultureplex, where it brings entertainment by combining film, music, fine dining, and meeting point all in one place: The CGV CINEMAS.
                </p>
                <p className="mb-4">
                    All of the CGV staffs proudly call themselves stars because of their unique differences. The difference lays on the costumer oriented services. Each stars has the fresh and energetic bearings in giving services with warm and genial approaches, so each costumers can truly feel the amazing experience during their visit to CGV CINEMAS. All of these are based on CGV CINEMAS vision, to be the ultimate choice for the most unforgettable experiences.
                </p>
                <p className="mb-4">
                Based on the vision, CGV CINEMAS is running a mission: <br />
                1. to provide the most innovative, fun and enjoyable entertainment experiences to all our customers, and <br />
                2. to create growth opportunities to all our stakeholders, employees, suppliers and community.
                </p>
                <p className="mb-4">
                    Do you have what it takes to be a stars? If you are interested in joining this marvelous team delivering the unforgettable experience in entertainment, fill the form and send it to us.
                </p>
                
                <p className="mb-4">
                    CAREER OPPORTUNITIES
                </p>
                <ul className="list-disc ml-5 mb-4">
                    <li>
                        A. Finance & Accounting
                        <ul className="list-disc ml-5 mb-4">
                            <li>a. Purchasing</li>
                            <li>b. Legal & Compliance</li>
                            <li>c. IT Management</li>
                            <li>d. Technical Team
                                <ul className="list-disc ml-5 mb-4">
                                    <li>i. Movie Engineer Support</li>
                                </ul>
                            </li>
                            <li>e. Operations
                                <ul className="list-disc ml-5 mb-4">
                                    <li>i. Cinema Supervisor</li>
                                    <li>ii. Assistant Cinema Manager</li>
                                    <li>iii. Operations Accounting</li>
                                    <li>iv. Learning and Development</li>
                                </ul>
                            </li>
                            <li>f. Food & Beverages</li>
                            <li>g. Content & Movie Programming</li>
                            <li>h. Safety Management
                                <ul className="list-disc ml-5 mb-4">
                                    <li>i. Hygiene and Sanitation</li>
                                </ul>
                            </li>
                            <li>i. Marketing</li>
                            <li>j. Brand Identity Team</li>
                            <li>k. Advertising Sales & Planning</li>
                            <li>l. Site Development</li>
                            <li>m. Project & Construction</li>
                            <li>n. Design & Layout</li>
                            <li>o. Human Resources</li>
                        </ul>
                    </li>
                </ul>
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

CareersPage.layout = CGVLayout;
export default CareersPage;
