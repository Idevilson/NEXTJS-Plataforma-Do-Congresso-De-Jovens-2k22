import React from 'react';
import styles from './styles.module.scss';
import { TimelineCard } from './timelineCard';

import cronograma from '../../../Assets/cronograma.json';

export function Timeline(){

    return(
        <div className={styles.timelineContainer}>
                <h1 className={styles.timelineTitle}>Cronograma do congresso</h1>

                
                {
                    cronograma.map((cronograma) => (
                        <TimelineCard 
                            key={cronograma.etapa}
                            dia={cronograma.dia}
                            etapa={cronograma.etapa}
                            acontecimento={cronograma.acontecimento}
                        />
                    ))
                }
        </div>
    );
};