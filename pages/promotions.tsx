import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import SocSignBar from '../components/SocSignBar';
import styles from './IndexPage.module.css';

const promotions = [
    {
        id: 1,
        name: 'BUY 1 GET 1 FREE dengan tukar point MyTelkomsel kamu!',
        imageUrl: '/promotion1.jpg',
    },
    {
        id: 2,
        name: 'Give Best Moment with CGV Gift Card!',
        imageUrl: '/promotion2.jpg',
    },
    {
        id: 3,
        name: 'PICK YOUR PRESENT! Get Marhen J Bag + Special Class Ticket + Popcorn',
        imageUrl: '/promotion3.jpg',
    },
    {
        id: 4,
        name: 'Nonton Hemat Pake QRIS Jago Cashback 40%!',
        imageUrl: '/promotion4.jpg',
    },
    {
        id: 5,
        name: 'Nonton Makin Seru Dengan Buy 3 Get 1 Ticket dari Kartu Kredit OCBC!',
        imageUrl: '/promotion5.jpg',
    },
];

const PromotionsPage: React.FC = () => {
    return (
        <div>
            <div className={styles['centerSection']}>
                <SocSignBar />
                <h1>CULTUREPLEX</h1>
                <NavBar />
            </div>
            <h1 className={styles['centerText']}>Promotions</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , justifyContent: 'center'}}>
                {promotions.map(promotion => (
                    <div key={promotion.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <Image src={promotion.imageUrl} alt={promotion.name} width={200} height={200} />
                        <h2>{promotion.name}</h2>
                        <Link href={`/promotion/${promotion.id}`}>
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromotionsPage;
