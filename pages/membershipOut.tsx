import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import SocSignBar from '../components/SocSignBar';
import styles from './IndexPage.module.css';

const MembershipPage: React.FC = () => {
    return (
        <div>
            <div className={styles['centerSection']}>
                <SocSignBar />
                <h1>CULTUREPLEX</h1>
                <NavBar />
            </div>
            <h1 className={styles['centerText']}>Membership</h1>
            <div className={styles['centerImage']}>
            <Image src="/membershipImage.png" alt="Membership Image" width={500} height={300} />
            </div>
        </div>
    );
};

export default MembershipPage;