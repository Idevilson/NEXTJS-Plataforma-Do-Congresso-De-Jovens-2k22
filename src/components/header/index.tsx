import Link from 'next/link';
import styles from './styles.module.scss';


export function Header() {


    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/LogoIEQ.svg" alt="Logo da igreja do evangélio quadrangular" />
                <nav>
                    <Link className={styles.active} href="/home">
                        <a className={styles.active} href="">Home</a>
                    </Link>
                    <Link className={styles.active} href="/subscription">
                        <a className={styles.active} href="">Inscrição</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}