import type { NextPage } from "next";
import FooterSection from "./footer-section";
import styles from "./footer.module.css";
import {
  APPLE_PLAY_STORE_URL,
  DOWNLOAD_OUR_APP,
  FACEBOOK_URL,
  FOLLOW_US,
  GOOGLE_PLAY_STORE_URL,
  INDIA_GOVT_URL,
  INSTAGRAM_URL,
  RECOGNITION_URL,
  TELEGRAM_URL,
  TGSRTC_COPYRIGHT,
  TWITTER_URL
} from "../constants";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <FooterSection siteMapTextDecoration="unset" />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt="line-seperator"
          src="/lineSeparater.svg"
          loading="lazy"
        />
      </div>
      <footer className={styles.recognitionAndSocialMediaC}>
        <div className={styles.recognitionContainerWrapper}>
          <div className={styles.recognitionContainer}>
            <div className={styles.recognition1}>
              <a href={RECOGNITION_URL} target="_blank">
                <img
                  className={styles.recognitionLogoIcon}
                  alt="recognition"
                  src="/recognition-logo2x.png"
                  loading="lazy"
                />
                <div className={styles.recognitionTextIconSection}>
                  <img
                    className={styles.recognitionTextIcon}
                    alt="recognition-text"
                    src="/recognition-logo-text@2x.png"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            <a href={INDIA_GOVT_URL} target="_blank">
              <img
                className={styles.recognition2Icon}
                loading="lazy"
                alt="india-gov-logo"
                src="/recognition-2@2x.png"
              />
            </a>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMedia}>
            <div className={styles.followUsOn}>
              {FOLLOW_US}
            </div>
            <div className={styles.socialMediaHandles}>
              <a href={FACEBOOK_URL} target="_blank">
                <img
                  className={styles.socialMediaIcon1}
                  loading="lazy"
                  alt="facebook-icon"
                  src="/facebook-icon@2x.png"
                />
              </a>
              <a href={INSTAGRAM_URL} target="_blank">
                <img
                  className={styles.socialMediaIcon2}
                  loading="lazy"
                  alt="instagram-icon"
                  src="/instagram-icon@2x.png"
                />
              </a>
              <a href={TWITTER_URL} target="_blank">
                <img
                  className={styles.socialMediaIcon3}
                  loading="lazy"
                  alt="X-icon"
                  src="/X-icon@2x.png"
                />
              </a>
              <a href={TELEGRAM_URL} target="_blank">
                <img
                  className={styles.socialMediaIcon4}
                  loading="lazy"
                  alt="telegram-icon"
                  src="/telegram-icon@2x.png"
                />
              </a>
            </div>
          </div>
          <div className={styles.downloadPlartformContainer}>
            <div className={styles.downloadOurApp}>{DOWNLOAD_OUR_APP}</div>
            <div className={styles.downloadPlatform}>
              <a href={GOOGLE_PLAY_STORE_URL} target="_blank">
                <img
                  className={styles.googlePlayIcon}
                  loading="lazy"
                  alt="google-play-store"
                  src="/google-play@2x.png"
                />
              </a>
              <a href={APPLE_PLAY_STORE_URL} target="_blank">
                <img
                  className={styles.appStoreIcon}
                  loading="lazy"
                  alt="apple-play-store"
                  src="/app-store@2x.png"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright2021TgsrtcAllRWrapper}>
        <div className={styles.copyright2021Tgsrtc}>
          {TGSRTC_COPYRIGHT}
        </div>
      </div>
    </div>
  );
};

export default Footer;
