import React from 'react';
import styles from './styles.module.scss';

import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

export function Footer(){

    return(
        <footer className={styles.footerContainer}>
            <div>
                <h3>Redenção-PA capital do avivamento</h3>
                <div className={styles.contatos}>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5594991441198"> <h2>Whatsapp</h2><BsWhatsapp color="#fff"/></a>
                    <a href="https://www.instagram.com/ieqsede157/"><h2>Instagram</h2><BsInstagram color="#fff"/></a> 
                </div>
            </div>
                
        </footer>
    )
}