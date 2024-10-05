// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Mon Portfolio</h1> <br></br> <br></br>
            <nav className={styles.nav}>
                <Link href="/">Accueil</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
