import React, { useState } from 'react';
import styles from './styles.module.scss';
import ReactModal from 'react-modal';


interface ConfirmationModalProps{
    opemModal: () => void;
}

export function ConfirmationModal({ opemModal }: ConfirmationModalProps) {
    const [isOpemModal, setIsOpemModal] = useState(true);

    function closeModal(){
      setIsOpemModal(true);
    }
    

    return (
      <>
        <ReactModal
          isOpen={false}
          className={styles.modal}
          overlayClassName={styles.overlay}

        >

          <div className={styles.modalContent}>
            <div className={styles.header}>Modal Title</div>
            <button />
            <div className={styles.modalBody}>
              <p>
                  Olá, ______!
                  Muito obrigada(o) por se candidatar à vaga _______aqui no/na nome da empresa! Ficamos muito felizes em saber que cada vez mais pessoas querem fazer parte de nossa equipe.
                  Recebemos seu/sua inscrição / currículo / portfólio. e agora iremos analisar todas as candidaturas recebidas. Planejamos agendar a próxima etapa até data.
                  Se você estiver entre os perfis que desejamos, você será avisado(a). De qualquer modo, vamos manter você informado(a) sobre o status da sua inscrição.
                  Obrigado(a), novamente, por dedicar um tempo para se inscrever. Boa sorte!
              </p>
            </div>
                
            <div className={styles.modalFooter}>
              <button onClick={closeModal}>
                Close
              </button>
              <button>Secondary Action</button>
            </div>
          </div>
             
        </ReactModal>
      </>
    )
  }