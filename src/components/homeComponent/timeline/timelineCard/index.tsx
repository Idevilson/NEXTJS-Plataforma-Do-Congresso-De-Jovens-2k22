import React from 'react';
import styles from './styles.module.scss';

interface TimelineCardProps {
    dia: string
    etapa: string;
    acontecimento: string[];
}

export function TimelineCard({
    dia,
    etapa,
    acontecimento
}: TimelineCardProps){

    return(
        <div className={styles.timelineCardContainer}>
            <div className={styles.header}>
                    <h1>{dia + ' '+ '(' + etapa + ')'} </h1>
                    <div />
            </div>
            <div className={styles.bottom}>
                {
                    acontecimento.map((value) => (
                        <p key={value}>{value}<br /></p> 
                    ))
                }   
            </div>
        </div>
    )
}