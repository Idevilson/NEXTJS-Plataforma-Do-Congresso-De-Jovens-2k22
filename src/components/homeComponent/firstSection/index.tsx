import React from 'react';
import CountdownTimer from '../../countdownTimer';
import styles from './styles.module.scss';

export function FirstSection(){
    function leftDayCalq(){
        const today = new Date();
        var eventDate=new Date(today.getFullYear(), 6, 7);
        if (today.getMonth()==6 && today.getDate()>7){
          eventDate.setFullYear(eventDate.getFullYear()+1); 
        }  
        var one_day=1000*60*60*24;
        const result = Math.ceil((eventDate.getTime()-today.getTime())/(one_day));
        return result;
    }

    const THREE_DAYS_IN_MS = (leftDayCalq()) * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
    return(
      <>
      <img className={styles.logoIeqCoroa}src="/images/LogoIEQ/Coroa.png" alt="logo da coroa" />
      <img className={styles.logoIeqCalice}src="/images/LogoIEQ/Calice.png" alt="logo do calice" />

        <div className={styles.firstSectionContainer}>
          <section className={styles.TextSection}>
              <h1>Congresso Estadual <br /> Setorizado de <span>Jovens</span> 2022</h1>

              <p>
                Garanta a sua vaga, faça já a sua <span>inscrição</span> <br />
                
              </p>
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </section>
          
          <img className={styles.logoGeracaoForte} src="/images/LogoGeracaoForte.svg" alt="Logo Da Geração Forte" />  
        </div>
      </>
    )
}