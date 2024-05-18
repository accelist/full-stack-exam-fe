import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const GoldClassPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041819584206.jpg" alt="Gold Class Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2308/SA202308041819584206_content.jpg" alt="Gold Class Content" />
        </div>
    )
}

GoldClassPage.layout = WithDefaultLayout;
export default GoldClassPage;
