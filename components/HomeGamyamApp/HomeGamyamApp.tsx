import type { NextPage } from "next";
import styles from "./HomeGamyamApp.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useState } from "react";
import { APPLE_PLAY_STORE_URL, DOWNLOAD_OUR_APP, GOOGLE_PLAY_STORE_URL } from "../../constants";

export type HomeGamyamAppType = {
  data?: {
    gamayamTitle?: string;
    gamayamParagraph?: string;
    gamayamLogoUrl?: string;
    webIconUrl?: string;
    shadowImageUrl?: string;
    mobileIconUrl?:string;
  };
  className?: string;
};

const HomeGamyamApp: NextPage<HomeGamyamAppType> = ({ data, className = "" }) => {
  const [width, setWidth] = useState<boolean>(false);
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth > 750);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <section className={[styles.homeGamyamApp, className].join(" ")}>
      <div className={styles.gamayamContent}>
        <div className={styles.logoAndTextSection}>
          {width ? (
          <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt="gamayam logo"
            src={`${UPLOADS_BASE_URL}${data?.gamayamLogoUrl}`}
          />
          ) :(
            <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt="gamayam logo"
            src={`${UPLOADS_BASE_URL}${data?.mobileIconUrl}`}
          />
          )}
          <p className={styles.download}>{DOWNLOAD_OUR_APP}</p>
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
          <div className={styles.texts}>
            <h1 className={styles.gamyamApp}>{data?.gamayamTitle }</h1>
            <p className={styles.experienceSeamlessTravel}>
              {data?.gamayamParagraph }
            </p>
          </div>
        </div>
        <img
          className={styles.icon}
          loading="lazy"
          alt="mobile images"
          src={`${UPLOADS_BASE_URL}${data?.webIconUrl}` }
        />
        <img
          className={styles.shadowlayer}
          loading="lazy"
          alt="shadow image"
          src={`${UPLOADS_BASE_URL}${data?.shadowImageUrl}` }
        />
      </div>
    </section>
  );
};

export default HomeGamyamApp;
