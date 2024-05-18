import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const VelvetClassPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041826292094.jpg" alt="Velvet Class Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2308/SA202308041826292094_content.jpg" alt="Velvet Class Content" />
        </div>
    )
}

VelvetClassPage.layout = WithDefaultLayout;
export default VelvetClassPage;

