import React, { createRef, useState } from 'react';
import { validate } from 'gerador-validador-cpf';
import { v4 as uuidv4 } from 'uuid';

import "../../database/fireBaseConfig";

import Lottie from 'lottie-react';
import form from '../../lottie/form.json';
import styles from './styles.module.scss';

import { ConfirmationModal } from '../../components/Modal';

import municipios from '../../Assets/minicipios.json';
import { DoYourSubscriptionButton } from '../../components/_ui/doYourSubscriptionButton';

import { db } from '../../database/fireBaseConfig';
import {
    addDoc, 
    collection, 
    where, 
    query,
    getDocs
} from 'firebase/firestore';

export default function Subscription(){

    const [isOpemModal, setIsOpemModal] = useState(false);

    const nomeInputRef = createRef<HTMLInputElement>();
    const cpfInputRef = createRef<HTMLInputElement>();
    const idadeInputRef = createRef<HTMLInputElement>();
    const campoInputRef = createRef<HTMLInputElement>();
    const sexoSelectRef = createRef<HTMLSelectElement>();
    const cidadeSelectRef = createRef<HTMLSelectElement>();
    const collectionRef = collection(db, 'inscritos2k22'); 

    let hashSubscriptionCode = "d527eb60-ec0a-4a35-8f2e-91e4ae5695e4";
    function opemModal(){
        setIsOpemModal(true);
    }   

    async function handleSubmitForm(){
        const nome = nomeInputRef.current.value;
        const cpf = cpfInputRef.current.value;
        const idade = idadeInputRef.current.value;
        const campo = campoInputRef.current.value;
        const sexo = sexoSelectRef.current.value;
        const cidade = cidadeSelectRef.current.value;
        const date = new Date();
        const timesTamp = new Date().getTime();

        const queryResult = await query(collection(db, "inscritos2k22"), where("cpf", "==", cpf));
        await getDocs(queryResult).then((doc) => {
            const docData = [];

            doc.forEach((doc) => {
                docData.push(doc.data())
            });

            if(docData.length === 0){
                checkFields();
            }else{
                alert("O CPF INFORMADO JÁ ESTÁ CADASTRADO.");
                window.location.reload();
            }
        })

        function checkFields(){
            if(nome === ""){
                alert("Preencha o campo nome");
            }else if(idade === ""){
                alert("idade inválida");        
            }else if(campo === ""){
                alert("Informe o campo da sua região!");
            }else if(validate(cpf) === false){
                alert("CPF inválido");
            }else{
                submitDoc();
            }
        }

        async function submitDoc(){
            const data = {
                nome: nome,
                cpf: cpf,
                idade: idade,
                campo: campo,
                pago: false,
                cidade: cidade,
                sexo: sexo,
                createdAt: date,
                Timestamp: timesTamp,
                subscriptionCode: uuidv4()
            }
            hashSubscriptionCode = data.subscriptionCode;

            await addDoc(collectionRef, data).then(() => {                         
                
                console.log(hashSubscriptionCode);
                console.log("cadastro realizado");
                opemModal();
            }).catch(() => console.log("Erro"));
        }  
    }
    
    return(
    <>
        <div className={styles.paymentContainer}>

            <h1>Ficha de inscrição</h1>
            <h5>Preencha cada campo da ficha para realizar a sua inscrição</h5>

            <div className={styles.content}>
            <div className={styles.leftSide}>
                <div className={styles.lottieContainer}>
                        <Lottie 
                            loop={true}
                            animationData={form}
                            style={{
                                width: 400
                            }}
                        />
                </div>

                <p>
                    Este documento visa registrar a manifestação livre, 
                    informada e inequívoca pela qual o Titular concorda 
                    com o tratamento de seus dados pessoais para finalidade 
                    específica, em conformidade com a Lei nº 13.709 – 
                    Lei Geral de Proteção de Dados Pessoais (LGPD). Ao manifestar sua 
                    aceitação para com o presente termo, o Titular consente em 
                    fornecer os seguintes dados pessoais: NOME COMLPETO, SEXO, IDADE, 
                    CAMPO, CPF E CIDADE. Os dados serão utilizados no processo 
                    de estatística e métrica do congresso setorizado estadual de jovens.
                </p>
                
                
            </div>

            <div className={styles.rightSide}>
                <div className={styles.inputContainer}>

                    <label>Informe o nome</label>
                    <input
                        ref={nomeInputRef} 
                        type="text" 
                        className={styles.input} 
                        placeholder='Nome'
                    />

                    <label>Selecione o sexo</label>
                    <select
                        ref={sexoSelectRef}
                        className={styles.input}
                    >
                        <option value="M">MASCULINO</option>
                        <option value="F">FEMININO</option>
                    </select>

                    <label>Informe a idade</label>
                    <input 
                        ref={idadeInputRef}
                        className={styles.input}
                        placeholder='Idade'
                        type="number"
                    />

                    <label>Informe o seu campo</label>
                    <input 
                        ref={campoInputRef}
                        className={styles.input}
                        placeholder='Exemplo: Campo 157'
                        type="text"
                    />

                    <label>Informe o CPF</label>
                    <input 
                        ref={cpfInputRef}
                        className={styles.input}
                        placeholder='CPF'
                        type="number"
                        maxLength={11}
                        data-mask="000.000.000-00"
                    />
                
                    <label>Informe o cidade</label>
                    <select 
                        ref={cidadeSelectRef}
                        className={styles.input}
                    >
                        {
                            municipios.nomes.map(cidade => (
                                <option key={cidade} value={cidade}>{cidade}</option>
                            ))
                        }
                    </select>   

                    <DoYourSubscriptionButton onClick={handleSubmitForm}/>  
                    <ConfirmationModal 
                        codigo={hashSubscriptionCode}
                        opemModal={isOpemModal}
                    />
                </div>
            </div>
            </div>
        </div>
    </>
    )
}