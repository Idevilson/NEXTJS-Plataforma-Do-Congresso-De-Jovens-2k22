import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from './styles.module.scss';

export function KitsDoCongresso(){

    return(
        <div className={styles.container}>
            <h1>Faça já a sua inscrição e receba o seu kit!</h1>
            <div className={styles.imageContainer}>
                <Link href="/subscription">
                    <Image 
                        width={900}
                        height={600}
                        src="/images/kitDoCongresso.png" 
                        alt="Imagem completa do kit do congresso" 
                        style={{
                            marginTop: 50,
                            cursor: 'pointer'
                            
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}