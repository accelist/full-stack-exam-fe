import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SocSignBar from '../components/SocSignBar';
import styles from './IndexPage.module.css';

const cinemaData = {
    Jakarta: ['Grand Indonesia', 'Pacific Place', 'Central Park', 'Slipi Jaya', 'Green Pramuka Mall', 'Bella Terra Lifestyle Center', 'Transmart Cempaka Putih', 'Aeon Mall JGC', 'FX Sudirman', 'Sunter Mall', 'Buaran Plaza', 'Poins Mall'],
    Bandung: ['Paris Van Java', 'Miko Mall', 'BEC Mall', '23 Paskal Shopping Center', 'Metro Indah Mall', 'Kings Shopping Center'],
    'Tangerang Selatan': ['Teras Kota', 'Transmart Graha Bintaro', 'Paradise Walk Serpong'],
    Bekasi: ['Bekasi Cyber Park', 'Bekasi Trade Center', 'Lagoon Avenue Bekasi'],
    Balikpapan: ['Plaza Balikpapan'],
    Yogyakarta: ['Jwalk Mall', 'Pakuwon Mall Jogja', 'Transmart Maguwo'],
    Tangerang: ['Bandara City Mall', 'Ecoplaza Citraraya Cikupa', 'Grand Batavia', 'Mal Ciputra Tangerang'],
    Cirebon: ['Grage City Mall', 'Transmart Cirebon'],
    Surabaya: ['Marvell City', 'BG Junction', 'Maspion Square'],
    Karawang: ['Festive Walk', 'Technomart', 'Cikampek Mall'],
    Mojokerto: ['Sunrise Mall'],
    Medan: ['Focal Point'],
    Purwokerto: ['Rita Supermall'],
    Palembang: ['Social Market', 'Transmart Palembang', 'PTC Mall'],
    Depok: ['Depok Mall', 'DTC Depok'],
    Tegal: ['Transmart Tegal'],
    Pekanbaru: ['Transmart Pekanbaru', 'Holiday Pekanbaru', 'Studio Pekanbaru'],
    Mataram: ['Transmart Mataram'],
    Solo: ['Transmart Solo'],
    Lampung: ['Transmart Lampung'],
    Gresik: ['Icon Mall Gresik'],
    Bogor: ['Vivo Sentul'],
    Blitar: ['Blitar Square'],
    Samarinda: ['Plaza Mulia'],
    Batam: ['Park Avenue Batam', 'Grand Batam Mall'],
    Purwakarta: ['Sadang Terminal Square'],
    Madiun: ['Plaza Lawu Madiun'],
    Kediri: ['Kediri Mall'],
    Cikarang: ['Living Plaza Jababeka'],
    Probolinggo: ['Wijaya Kusuma'],
    Makassar: ['Panakkukang Square'],
    Malang: ['Malang City Point'],
    Jember: ['Roxy Square Jember'],
    Padang: ['Raya Padang'],
    'Tangerang City': ['Foodmosphere'],
    Serang: ['Ecoplaza Citra Maja Raya'],
    Manado: ['Grand Kawanua Manado'],
};

const CinemasPage: React.FC = () => {
    const [openCity, setOpenCity] = useState<string | null>(null);

    const handleCityClick = (city: string) => {
        setOpenCity(openCity === city ? null : city);
    };

    return (
        <div>
            <div className={styles['centerSection']}>
                <SocSignBar />
                <h1>CULTUREPLEX</h1>
                <NavBar />
            </div>
            <ul>
                {Object.keys(cinemaData).map(city => (
                    <li key={city}>
                        <button onClick={() => handleCityClick(city)}>
                            {city}
                        </button>
                        {openCity === city && (
                            <ul>
                                {cinemaData[city].map(mall => (
                                    <li key={mall}>{mall}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CinemasPage;
