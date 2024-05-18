import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const SweetBoxPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041828077499.jpg" alt="Sweet Box Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2308/SA202308041828077499_content.jpg" alt="Sweet Box Content" />
        </div>
    )
}

SweetBoxPage.layout = WithDefaultLayout;
export default SweetBoxPage;
