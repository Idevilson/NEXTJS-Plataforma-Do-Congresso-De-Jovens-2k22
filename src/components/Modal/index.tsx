import React from 'react';
import styles from './styles.module.scss';
import ReactModal from 'react-modal';
import { jsPDF } from "jspdf";

import { useRouter } from 'next/router';

interface ConfirmationModalProps{
    opemModal: boolean
    codigo: string;
}
ReactModal.setAppElement('#__next');

export function ConfirmationModal({ opemModal, codigo }: ConfirmationModalProps) {

  const router = useRouter();
  function handleNavigateToPayment(){
    router.push("/payment");
  }

  async function generatePDF(){
    const doc = new jsPDF();
    

    await doc.html(
      document.getElementById('container'), {
      callback: function (doc) {
        doc.save("Comprovante de inscrição");
      },
      width: 300
    })
  
  }

  return (
    <>
      <ReactModal
        isOpen={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div id="container"> 
          <div className={styles.modalContent}>
            <div className={styles.header}>
              <h1>
                  COMPROVANTE DE INCRIÇÃO
              </h1>
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
              <div className={styles.footerButton}>
                <button onClick={handleNavigateToPayment}>FAZER PAGAMENTO</button>
              </div>
            </div>
          </div>
        </div>     
      </ReactModal>
    </>
  )
}