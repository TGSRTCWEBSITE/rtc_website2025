import React from 'react'
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from '../../services/service';


const   OpenDataBanner: React.FC = ({ data }) => {
  
  return (
    <section className={styles.heroSection}>
    <img className={styles.heroBackgroundImageWeb} alt="hero background image website" src={UPLOADS_BASE_URL + data?.OpenDataWebImage?.data?.attributes?.url} loading='lazy' />
    <img className={styles.heroBackgroundImageMobile} alt="hero background image mobile" src={UPLOADS_BASE_URL + data?.OpenDataMobileImage?.data?.attributes?.url} loading='lazy' />
    <div className={styles.heroSectionContent}>
      <div className={styles.heroTitle}>{data.OpenDataHeading}</div>
    </div>
  </section>
  )
}
export default OpenDataBanner
