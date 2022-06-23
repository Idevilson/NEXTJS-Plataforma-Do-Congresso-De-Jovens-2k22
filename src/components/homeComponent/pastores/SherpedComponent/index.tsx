import React from 'react';
import styles from './styles.module.scss';

interface SherpedProps{
    nome: string;
    image: string;
}

export function Sherped({nome, image}: SherpedProps){  

    return(
        <div className={styles.sherpedContainer}>
            <div className={styles.header}>
                <img src={image} alt="Avatar" />
            </div>
            <div className={styles.footer}>
                <h3>{nome}</h3>
            </div>
        </div>
    )
}