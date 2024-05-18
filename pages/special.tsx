import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import SocSignBar from '../components/SocSignBar';
import styles from './IndexPage.module.css';

const auditoriums = [
    { id: 1, name: 'Gold Class', imageUrl: '/auditoriums1.jpg'},
    { id: 2, name: 'Velvet Class', imageUrl: '/auditoriums2.jpg'},
    { id: 3, name: 'Satin Class', imageUrl: '/auditoriums3.jpg'},
    { id: 4, name: 'Sweetbox', imageUrl: '/auditoriums4.jpg'},
    { id: 5, name: '4DX', imageUrl: '/auditoriums5.jpg'},
    { id: 6, name: 'ScreenX', imageUrl: '/auditoriums6.jpg'},
    { id: 7, name: 'Starium', imageUrl: '/auditoriums7.jpg'},
    { id: 8, name: 'SphereX', imageUrl: '/auditoriums8.jpg'},
    { id: 9, name: 'Private Box', imageUrl: '/auditoriums9.png'},
];

const sports = [
    { id: 10, name: 'SPORTS HALL FX SUDIRMAN', imageUrl: '/sports1.jpg'},
    { id: 11, name: 'SPORTS HALL TERAS KOTA', imageUrl: '/sports2.jpg'},
    { id: 12, name: 'SPORTS HALL CIPUTRA TANGERANG', imageUrl: '/sports3.jpg'},
];

const SpecialPage: React.FC = () => {
    const [showAuditoriums, setShowAuditoriums] = useState(false);
    const [showSports, setShowSports] = useState(false);

    return (
        <div>
            <div className={styles['centerSection']}>
                <SocSignBar />
                <h1>CULTUREPLEX</h1>
                <NavBar />
            </div>
            <div>
                <button onClick={() => setShowAuditoriums(!showAuditoriums)}>Auditoriums</button>
                {showAuditoriums && (
                    <div>
                        {auditoriums.map(auditorium => (
                            <div key={auditorium.id}>
                                <Link href={`/special/${auditorium.id}`}>
                                    <Image src={auditorium.imageUrl} alt={auditorium.name} width={150} height={150} />
                                    <p>{auditorium.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button onClick={() => setShowSports(!showSports)}>Sports</button>
                {showSports && (
                    <div>
                        {sports.map(sport => (
                            <div key={sport.id}>
                                <Link href={`/special/${sport.id}`}>
                                    <Image src={sport.imageUrl} alt={sport.name} width={150} height={150} />
                                    <p>{sport.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpecialPage;
