import React from 'react';
import NowPlayingList from '../components/NowPlayingList';
import ComingSoonList from '../components/ComingSoonList';
import NavBar from '../components/NavBar';
import SocSignBar from '../components/SocSignBar';
import styles from './IndexPage.module.css';

const MoviesPage: React.FC = () => {
    return (
        <div>
            <div className={styles['centerSection']}>
                <SocSignBar />
                <h1>CULTUREPLEX</h1>
                <NavBar />
            </div>
            <NowPlayingList />
            <ComingSoonList />
        </div>
    );
};

export default MoviesPage;
