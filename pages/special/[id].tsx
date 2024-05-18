import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const items = [
    { id: 1, name: 'Gold Class', imageUrl: '/auditoriums1.jpg', imageUrlDesc: '/descAud1.jpg'},
    { id: 2, name: 'Velvet Class', imageUrl: '/auditoriums2.jpg', imageUrlDesc: '/descAud2.jpg'},
    { id: 3, name: 'Satin Class', imageUrl: '/auditoriums3.jpg', imageUrlDesc: '/descAud3.jpg'},
    { id: 4, name: 'Sweetbox', imageUrl: '/auditoriums4.jpg', imageUrlDesc: '/descAud4.jpg'},
    { id: 5, name: '4DX', imageUrl: '/auditoriums5.jpg', imageUrlDesc: '/descAud5.jpg'},
    { id: 6, name: 'ScreenX', imageUrl: '/auditoriums6.jpg', imageUrlDesc: '/descAud6.jpg'},
    { id: 7, name: 'Starium', imageUrl: '/auditoriums7.jpg', imageUrlDesc: '/descAud7.jpg'},
    { id: 8, name: 'SphereX', imageUrl: '/auditoriums8.jpg', imageUrlDesc: '/descAud8.jpg'},
    { id: 9, name: 'Private Box', imageUrl: '/auditoriums9.png', imageUrlDesc: '/descAud9.jpg'},
    { id: 10, name: 'SPORTS HALL FX SUDIRMAN', imageUrl: '/sports1.jpg', imageUrlDesc: '/descSpo1.jpg'},
    { id: 11, name: 'SPORTS HALL TERAS KOTA', imageUrl: '/sports2.jpg', imageUrlDesc: '/descSpo2.jpg'},
    { id: 12, name: 'SPORTS HALL CIPUTRA TANGERANG', imageUrl: '/sports3.jpg', imageUrlDesc: '/descSpo3.jpg'},
];

const SpecialDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const item = items.find(item => item.id === parseInt(id as string));

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <div>
            <Image src={item.imageUrl} alt={item.name} width={500} height={300} />
            <h1>{item.name}</h1>
            <Image src={item.imageUrlDesc} alt={item.name} width={500} height={300} />
        </div>
    );
};

export default SpecialDetailPage;
