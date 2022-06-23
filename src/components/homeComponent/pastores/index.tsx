import React from 'react';

import pastores from "../../../Assets/pastores.json";

import styles from './styles.module.scss';
import { Sherped } from './SherpedComponent';

export function Pastores(){
    
    return(
        <div className={styles.pastoresContainer}>
            <div className={styles.header}>
                <h1>Pastores</h1>
                <div>
                    <h5>VEJA OS PASTORES</h5>
                </div>
            </div>

            <div className={styles.sherpedsContainer}>
                {
                    pastores.map((pastores) => 
                        <Sherped 
                            key={pastores.id}
                            nome={pastores.nome}
                            image={pastores.imagem}
                        />
                    )
                }
            </div>
        </div>
    )
}
