import { NextPage } from "next";
import styles from "./index.module.css";
import CommonButton from "../button";
import { UPLOADS_BASE_URL } from "../../services/service";
import { TGSRTC_HOSIPTAL_LINK } from "../../constants";

export type HospitalContactType = {
  weAreAvailableTitle: string;
  phoneNumber1:string;
  tgsrtcEmp:string;
  phoneNumber2:string;
  nonTgsrtcEmp:string;
  hospitalEmail:string;
  bookButton:string;
  doctorsWebImage:any;
  doctorsMobileImage:any;
  className?: string;
};

const HospitalContact: NextPage<HospitalContactType> = ({weAreAvailableTitle,phoneNumber1,tgsrtcEmp,phoneNumber2,nonTgsrtcEmp,hospitalEmail,bookButton,doctorsWebImage,doctorsMobileImage,className = "",}) => {
  return (
    <section className={[styles.hospitalContact, className].join(" ")}>
      <div className={styles.availability}>
        <div className={styles.weAreAvailableForYouConta}>
          <div className={styles.contactTexts}>
            <h1 className={styles.weAreAvailable}>
              {weAreAvailableTitle}
            </h1>
            <div className={styles.support}>
              <div className={styles.phoneContainer}>
                <div className={styles.phone}>
                  <img
                    className={styles.icons}
                    loading="lazy"
                    alt="call-icon1"
                    src="/icons1.svg"
                  />
                  <div className={styles.forTgsrtcEmployee}>
                    <a href={`${"tel:"}${phoneNumber1}`} className={styles.links}>{phoneNumber1}</a>
                    <span>{tgsrtcEmp}</span>
                  </div>
                </div>
                <img
                  className={styles.lineIcon}
                  loading="lazy"
                  alt="line-icon"
                  src="/line1.svg"
                />
                <div className={styles.phone1}>
                  <img
                    className={styles.icons1}
                    loading="lazy"
                    alt="call-icon2"
                    src="/icons1.svg"
                  />
                  <div className={styles.nonTgsrtcEmployee}>
                    <a href={`${"tel:"}${phoneNumber2}`} className={styles.links}>{phoneNumber2}</a>
                    <span>{nonTgsrtcEmp}</span>
                  </div>
                </div>
              </div>
              <div className={styles.email}>
                <img
                  className={styles.icons2}
                  alt="mail-icon"
                  src="/icons-21.svg"
                />
                <h2 className={styles.supporttgsrtchospitalcom}>
                  <a href={`${"mailto:"}${hospitalEmail}`} className={styles.links}>{hospitalEmail}</a>
                </h2>
              </div>
            </div>
          </div>

          <div className={styles.cargoButton} onClick={()=>window.open(TGSRTC_HOSIPTAL_LINK)}>
              <div className={styles.button}>
              {bookButton}
              </div>        
          </div>
        </div>
      </div>
      <div className={styles.contactImage}>
        <img
          className={styles.contactImageWeb}
          loading="lazy"
          alt="hospital-contact-image-web"
          src={UPLOADS_BASE_URL + doctorsWebImage?.data?.attributes?.url}
        />
        <img
          className={styles.contactImageMobile}
          loading="lazy"
          alt="hospital-contact-image-mobile"
          src={UPLOADS_BASE_URL + doctorsMobileImage?.data?.attributes?.url}
        />
      </div>
    </section>
  );
};

export default HospitalContact;