import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const ScreenXPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041831366877.jpg" alt="ScreenX Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2308/SA202308041831366877_content.jpg" alt="ScreenX Content" />
        </div>
    )
}

ScreenXPage.layout = WithDefaultLayout;
export default ScreenXPage;
