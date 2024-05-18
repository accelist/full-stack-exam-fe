import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const PrivateBoxPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2402/SA202402170700368566.png" alt="Private Box Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2402/SA202402170700368566_content.jpg" alt="Private Box Content" />
        </div>
    )
}

PrivateBoxPage.layout = WithDefaultLayout;
export default PrivateBoxPage;
