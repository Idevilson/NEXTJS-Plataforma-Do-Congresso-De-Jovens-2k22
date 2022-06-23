import styles from './home.module.scss';

import Head from 'next/head';

import { FirstSection } from '../components/homeComponent/firstSection';
import { AboutEvent } from '../components/homeComponent/aboutEvent';
import { ChamadaDoCongresso } from '../components/homeComponent/chamadaDoCongresso';
import { BandaOnFire } from '../components/homeComponent/bandaOnfire';
import { KitsDoCongresso } from '../components/homeComponent/kitsDoCongresso';
import { Pastores } from '../components/homeComponent/pastores';
import { Timeline } from '../components/homeComponent/timeline';
import { Footer } from '../components/footer';

export default function Home() {

  return (
    <>
      <Head>
        <title>CONGRESSO DE JOVENS 2K22</title>
      </Head>

      <div className={styles.homeContainer}>
        <FirstSection />
        <AboutEvent /> 
        <ChamadaDoCongresso />
        <BandaOnFire />
        <KitsDoCongresso />
        <Pastores /> 
        <Timeline /> 
        <Footer /> 
      </div> 
    </>
  )
}
