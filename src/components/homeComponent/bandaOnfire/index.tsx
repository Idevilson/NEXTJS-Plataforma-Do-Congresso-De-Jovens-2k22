import React from 'react';
import ReactPlayer from 'react-player';

import styles from './styles.module.scss';

export function BandaOnFire(){

    return(
        <div className={styles.container}>
            <h1>Noemy Nery e Banda ONFIRE</h1>
            <div className={styles.Player}>
              <img src="./images/bandaOnFire.jpg" alt="Imagem da Banda OnFire" />
            </div>
        </div>
    );
}