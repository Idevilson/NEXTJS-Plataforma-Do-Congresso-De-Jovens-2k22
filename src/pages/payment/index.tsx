import React from 'react';

import Lottie from 'lottie-react';
import qrCode from '../../lottie/qrCode.json';
import { BsWhatsapp } from 'react-icons/bs';
import styles from './styles.module.scss';
import Image from 'next/image'

export default function Payment(){

    return(
        <div className={styles.paymentContainer}>

            <div className={styles.rightSide}>
                <div className={styles.QrCodeContainer}>
                    <Image 
                        className={styles.qrCode} 
                        src="/images/PaymentQrCode.png" 
                        alt="QrCode para a transferência"
                        width={320} 
                        height={320}
                    />
                </div>
            </div>

            <div className={styles.leftSide}>
                <div className={styles.textContainer}>

                    <h1>ESCANEIE O QR CODE E FAÇA O PIX!</h1>

                    <div className={styles.lottieContainer}>
                        <Lottie 
                            loop={true}
                            animationData={qrCode}
                            style={{
                                width: 200
                            }}
                        />
                    </div>

                    <h1>
                        EM SEGUIDA, MANDE O COMPROVANTE <br />
                        PARA O SEGUINTE O NÚMERO:
                    </h1>  
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5594991441198"> 
                                <h1>whatsapp 9491441198 <BsWhatsapp color="#06ff51"/></h1>
                    </a> 
                </div>
            </div>

        </div>
    )
}