import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image'

export function Header() {


    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image 
                    src="/images/LogoIEQ.svg" 
                    alt="Logo da igreja do evangélio quadrangular"
                    width={50}
                    height={50}
                />
                <nav>
                    <Link className={styles.active} href="/">
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