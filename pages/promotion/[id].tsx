import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import SocSignBar from '../../components/SocSignBar';

const promotions = [
    {
        id: 1,
        name: 'Promotion 1',
        imageUrl: '/descPromotion1.png',
    },
    {
        id: 2,
        name: 'Promotion 2',
        imageUrl: '/descPromotion2.jpg',
    },
    {
        id: 3,
        name: 'Promotion 3',
        imageUrl: '/descPromotion3.jpg',
    },
    {
        id: 4,
        name: 'Promotion 4',
        imageUrl: '/descPromotion4.jpg',
    },
    {
        id: 5,
        name: 'Promotion 5',
        imageUrl: '/descPromotion5.jpg',
    },
];

const PromotionDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const promotion = promotions.find(promo => promo.id === parseInt(id as string));

    if (!promotion) {
        return <p>Promotion not found</p>;
    }

    return (
        <div>
            <SocSignBar />
            <h1>CULTUREPLEX</h1>
            <NavBar />
            <h1>{promotion.name}</h1>
            <Image src={promotion.imageUrl} alt={promotion.name} width={400} height={400} />
        </div>
    );
};

export default PromotionDetailPage;
