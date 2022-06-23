import React from 'react';

import styles from './styles.module.scss';

export function KitsDoCongresso(){

    return(
        <div className={styles.container}>
            <h1>Faça já a sua inscrição e receba o seu kit!</h1>
            <div className={styles.imageContainer}>
              <img src="/images/kitDoCongresso.png" alt="Imagem completa do kit do congresso" />
            </div>
        </div>
    );
}