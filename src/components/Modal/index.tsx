import React from 'react';
import styles from './styles.module.scss';
import ReactModal from 'react-modal';

import { useRouter } from 'next/router';

interface ConfirmationModalProps{
    opemModal: boolean
    codigo: string;
}

export function ConfirmationModal({ opemModal, codigo }: ConfirmationModalProps) {

  const router = useRouter();
  function handleNavigateToPayment(){
    router.push("/payment");
  }
    return (
      <>
        <ReactModal
          isOpen={opemModal}
          className={styles.modal}
          overlayClassName={styles.overlay}

        >

          <div className={styles.modalContent}>
            <div className={styles.header}>
              <h2>
                  COMPROVANTE DE INCRIÇÃO <br />
                  PARA O CONGRESSO DE JOVENS 2022
              </h2>
            </div>
            <button />
            <div className={styles.modalBody}>
              <p>
                <img className={styles.logoGeracaoForte} src="/images/LogoGeracaoForteBranco.png" alt="Logo Da Geração Forte" /> 
              </p>
            </div>
                
            <div className={styles.modalFooter}>
              <h2>
                  CÓDIGO DA INSCRIÇÃO:
              </h2>
              <h3>{codigo}</h3>
              <button>Secondary Action</button>
            </div>
          </div>
             
        </ReactModal>
      </>
    )
  }