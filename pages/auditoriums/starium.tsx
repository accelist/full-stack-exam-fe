import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const StariumPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041829003710.jpg" alt="Starium Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2308/SA202308041829003710_content.jpg" alt="Starium Content" />
        </div>
    )
}

StariumPage.layout = WithDefaultLayout;
export default StariumPage;
