import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

export function MinisterioBlessed(){

    return(
        <div className={styles.container}>
            <h1>Ministério Blessed</h1>
            <div className={styles.Player}>
                <Image 
                    src="/images/ministerioBlessed.jpg"
                    alt="Imagem da Banda OnFire" 
                    width={900}
                    height={600}
                />
            </div>
        </div>
    );
}