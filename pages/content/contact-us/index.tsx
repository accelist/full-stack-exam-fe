import { WithDefaultLayout } from '@/components/DefautLayout'
import { Page } from '@/types/Page'
import React from 'react'


const ContactUsPage: Page = () => {
    return (
        <div className='p-6 space-y-4 max-w-[980px] mx-auto border-4 border-red-600 my-6'>
            <h1>Contact CGV CINEMAS:</h1>
            <h2>Call Center</h2>
            <p>
                +6221-2920-0100
            </p>
            <h2>Email</h2>
            <p>
                callcenter@cgv.id
            </p>
            <h2>Call Center Operating Hours</h2>
            <p>Monday - Sunday 11.00 - 20.00</p>
            <p>CGV Cinemas HQ Office</p>
            <p>AIA Central 26th floor</p>
            <p>Jl. Jend. Sudirman Kav. 48A – Jakarta Selatan 12930</p>
        </div>
    )
}

ContactUsPage.layout = WithDefaultLayout;
export default ContactUsPage