import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'


const CareerPage: Page = () => {
    return (
        <div className='p-6 space-y-4 max-w-[980px] mx-auto border-4 border-red-600 my-6'>
            <h1>WHO ARE WE?</h1>
            <p>
                Welcome to CGV CINEMAS. In CGV CINEMAS the terms of Auditorium is what they call Theatre somewhere else,
                and it is where we screen all of our movies on the largest screens in Indonesia. CGV CINEMAS presents the concept of Cultureplex,
                where it brings entertainment by combining film, music, fine dining, and meeting point all in one place: The CGV CINEMAS.
            </p>
            <p>
                All of the CGV staffs proudly call themselves stars because of their unique differences.
                The difference lays on the costumer oriented services. Each stars has the fresh and energetic bearings in giving services with warm and genial approaches,
                so each costumers can truly feel the amazing experience during their visit to CGV CINEMAS.
                All of these are based on CGV CINEMAS vision, to be the ultimate choice for the most unforgettable experiences.
            </p>

            <p>
                Based on the vision, CGV CINEMAS is running a mission:
            </p>
            <ol className='list-decimal'>
                <li>to provide the most innovative, fun and enjoyable entertainment experiences to all our customers, and</li>
                <li>to create growth opportunities to all our stakeholders, employees, suppliers and community.</li>
            </ol>

            <p>
                Do you have what it takes to be a stars?
                If you are interested in joining this marvelous
                team delivering the unforgettable experience in entertainment, fill the form and send it to us.
            </p>
        </div>
    );
}

CareerPage.layout = WithDefaultLayout;
export default CareerPage