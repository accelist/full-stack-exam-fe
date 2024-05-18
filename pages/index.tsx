import { Title } from '../components/Title';
import { Page } from '../types/Page';
import NavBar from '../components/NavBar';
import SocSignBar from '../components/SocSignBar';
import MovieSelectionList from '../components/MovieSelection';
import styles from './IndexPage.module.css';

const IndexPage: Page = () => {
    return (
        <div>
            <Title>Home</Title>
            <div className={styles['centerSection']}>
                <SocSignBar />
                <h1>CULTUREPLEX</h1>
                <NavBar />
            </div>
            <MovieSelectionList />
        </div>
    );
}

export default IndexPage;
