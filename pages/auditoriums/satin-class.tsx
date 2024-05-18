import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'

const SatinClassPage: Page = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center p-4 gap-8'>
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041827191534.jpg" alt="Satin Class Thumbnail" />
            <img src="https://cdn.cgv.id/uploads_v2/special_audi/web/contents/2308/SA202308041827191534_content.jpg" alt="Satin Class Content" />
        </div>
    )
}

SatinClassPage.layout = WithDefaultLayout;
export default SatinClassPage;
