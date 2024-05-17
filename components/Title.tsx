import React from 'react';
import Head from 'next/head';

export const Title: React.FC<{
    children: string | number
}> = ({ children }) => {
    return (
        <Head>
            <title key="title">{'No. 1 Cultureplex in Indonesia'}</title>
        </Head>
    );
}
