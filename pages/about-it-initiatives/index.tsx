import React, { useEffect } from 'react'
import styles from "./index.module.css"
import AboutItIntiativeContent from '../../components/aboutItInitiativeContent';
import { doFetch } from '../../services/service';
import AboutInitiativeHero from '../../components/aboutIntiativeHero';
import AboutInitiativeIntroduction from '../../components/aboutInitiativeIntroduction';
import AboutInitiativeProjectProposed from '../../components/aboutInitiativeProjectProposed';
import AnimationBus from '../../components/animation-bus';
import AnimationBusMobile from '../../components/animation-bus-mobile';

export async function getStaticProps() {

  const data = await doFetch("/about-it-initiatives?populate=*");

  console.log(data)

  return {
    props: {
      data,
       // You can construct a title from your data.
       title: data?.heroTitle ? `${data.heroTitle} ` : "IT initiatives",
    },
  };
}

const AboutItInitiative = ({data}) => {


  return (<>
    <div className={styles.aboutInitiative}>
      {data && <AboutInitiativeHero data={data} />}
      <AnimationBus/>
      <AnimationBusMobile/>
      {data && <AboutInitiativeIntroduction data={data} />}
      {data && <AboutItIntiativeContent data={data} />}
      {data && <AboutInitiativeProjectProposed data={data} />}
    </div>
  </>)
}
export default AboutItInitiative;
