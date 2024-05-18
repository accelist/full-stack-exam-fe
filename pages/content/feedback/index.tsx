import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'


const FeedbackPage: Page = () => {
    return (
        <div className='p-6 space-y-4 max-w-[980px] mx-auto border-4 border-red-600 my-6'>
            <h1>Feedback</h1>
            <p>
                You can leave comments or feedback to our service by directly email us at support@cgv.id. We value every feedback we received.
                And once in a while will have promotionnal gift to our eager customer. Grateful for every seconds you give us thoughts!
            </p>
        </div>
    )
}

FeedbackPage.layout = WithDefaultLayout;

export default FeedbackPage