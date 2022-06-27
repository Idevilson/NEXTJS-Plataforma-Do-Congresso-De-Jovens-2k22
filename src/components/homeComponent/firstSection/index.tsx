import React from 'react';
import CountdownTimer from '../../countdownTimer';
import styles from './styles.module.scss';
import Image from 'next/image'

export function FirstSection(){
    function leftDayCalq(){
        const today = new Date();
        var eventDate=new Date(today.getFullYear(), 6, 8);
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
        <div className={styles.firstSectionContainer}>
          <section className={styles.TextSection}>
              <h1>Congresso Estadual <br /> Setorizado de <span>Jovens</span> 2022</h1>

              <p>
                Garanta a sua vaga, faça já a sua <span>inscrição</span> <br />
                
              </p>
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </section>
          
          <Image 
            src="/images/LogoGeracaoForte.svg" 
            alt="Logo Da Geração Forte" 
            width={400}
            height={400}
          />  
        </div>
      </>
    )
}