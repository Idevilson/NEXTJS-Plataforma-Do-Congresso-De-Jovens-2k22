import React from 'react';

import styles from './styles.module.scss';

export function AboutEvent(){
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.logoGeracaoForte} src="/images/SquareTwoImages.svg" alt="Logo Da Geração Forte" />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Sobre o congresso</h1>

                <p>
                    O congresso estadual setorizado de jovens foi criado
                    para trazer renovo, unção, visão, escolhas, para que
                    os nossos jovens sintam o chamado de Deus para suas vidas.
                    Esse é o maior objetivo desse congresso. Seja bem-vindo ao
                    novo tempo, a uma nova história em sua vida. -Pr Heitor Alexangre (2022).  
                </p>

                <h2 className={styles.subtitle}>
                    REDENÇÃO-PA CAPITAL DO AVIVAMENTO
                </h2>

                <div className={styles.squareInfoContainer}>
                    <div className={styles.squareInfo}>
                        <h1>3</h1>
                        <h3>Dias de evento</h3>
                    </div>

                    <div className={styles.squareInfo}>
                        <h1>5</h1>
                        <h3>Pastores</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}