import type { NextPage } from "next";
import styles from './index.module.css';
import { UPLOADS_BASE_URL } from "../../services/service";

export type CustomerSupportType = {
  customerSupportWebImage:any;
  customerSupportMobileImage:any;
  customerSupportTitle:string;
  customerSupportSubTitle:string; 
  customerSupportEmail:string;
  customerSupportContactNumber1:string;
  customerSupportContactNumber2:string;
};

const CustomerSupport:NextPage<CustomerSupportType>=({customerSupportWebImage,customerSupportMobileImage,customerSupportTitle,customerSupportSubTitle,customerSupportEmail,customerSupportContactNumber1,customerSupportContactNumber2})=>{

  return(
    <section className={`${styles.customerSupport}`}>
      <img 
        src={UPLOADS_BASE_URL+customerSupportWebImage?.data?.attributes?.url} 
        className={styles.customerSupportWebImg} 
        alt="customer suppport image" 
        loading="lazy"/>
      <img 
        src={UPLOADS_BASE_URL+customerSupportMobileImage?.data?.attributes?.url} 
        className={styles.customerSupportMobileImg} 
        alt="customer suppport mobile image" 
        loading="lazy"/>
      <div className={styles.customerSupportTexts}>
        <div className={styles.texts}>
          <h1 className={styles.customerSupportTitle}>{customerSupportTitle}</h1>
          <p className={styles.needHelpWith}>{customerSupportSubTitle}</p>
        </div>
        <div className={styles.emailPhone}>
          <div className={styles.email}>
            <img className={styles.emailIcon} alt="icons image" src="/icons-12.svg" loading="lazy"/>
            <a className={styles.emailAddress} href={`${"mailto:"}${customerSupportEmail}`}>{customerSupportEmail}</a>
          </div>
          <div className={styles.phone}>
            <img className={styles.phoneIcon} alt="icons" src="/icons-13.svg" loading="lazy"/>
            <p className={styles.contactNumbers}>
              <a className={styles.number} href={`${"tel:"}${customerSupportContactNumber1}`} >{customerSupportContactNumber1}</a> /  
              <a className={styles.number} href={`${"tel:"}${customerSupportContactNumber2}`} > {customerSupportContactNumber2}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerSupport;