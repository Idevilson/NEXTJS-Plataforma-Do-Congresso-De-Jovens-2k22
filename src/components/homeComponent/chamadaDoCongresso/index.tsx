import React from 'react';
import ReactPlayer from 'react-player';

import styles from './styles.module.scss';

export function ChamadaDoCongresso(){

    return(
        <div className={styles.container}>
            <h1>Chamada do congresso</h1>
            <div className={styles.Player}>
              <ReactPlayer 
                url={"https://youtu.be/lhTU_HaCqH8"}
                light={false}
                width={'60rem'}
                height={'35rem'}
              />
            </div>
        </div>
    );
}