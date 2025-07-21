import { useEffect } from "react";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import styles from "./index.module.css";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

type LeadershipCard = {
  leaderImage?: string;
  leaderName?: string;
  leaderDesignation?: string;
  twitterLink1?: string;
  twitterLink2?: string;
  twitterIcon?: string; 
  linkName?:string;
  linkName1?:string;
};

type Data = {
  title: string;
  leadershipCards: LeadershipCard[];
};

export async function getStaticProps() {

  const data = await doFetch("/about-tsrtc-leaderships?populate=*");

  console.log(data)

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} -` : "TGSRTC Leadership",
    },
  };
}

const AboutTSRTCLeadership = ({data}) => {

  const { title, leadershipCards } = data || {};

  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.aboutTsrtcLeadership}>
        <h1 className={styles.title}>{title}</h1>
        <main className={styles.aboutTsrtcLeadershipContent}>
          <div className={styles.tsrtcLeadershipCards}>
            {leadershipCards?.map((leader, index) => (
              <div className={styles.leadershipCardWrapper}>
                <div key={index} className={styles.leadershipCard}>
                <div className={styles.tsrtcLeadershipImagesParent}>
                  <div className={styles.tsrtcLeadershipImages}>
                    <img
                      className={styles.leaderImage}
                      loading="lazy"
                      alt={`Image of ${leader.leaderName}`}
                      src={UPLOADS_BASE_URL + leader.leaderImage}
                    />
                  </div>
                </div>
                <div className={styles.texts}>
                  <h3 className={styles.leaderNameText}>{leader.leaderName}</h3>
                  <div className={styles.position}>{leader.leaderDesignation}</div>
                  <div className={styles.twitterLinks}>
                    {leader.twitterLink1 && (
                      <div className={styles.twitterLinkSection1}>
                        <img src={UPLOADS_BASE_URL + leader.twitterIcon} alt="Twitter Icon" />
                        <a href={leader.twitterLink1} target="_blank" rel="noopener noreferrer" className={styles.linkName}>
                          {leader.linkName}
                        </a>
                      </div>
                    )}
                    {leader.twitterLink2 && (
                      <div className={styles.twitterLinkSection2}>
                       <img src={UPLOADS_BASE_URL + leader.twitterIcon} alt="Twitter Icon" />
                        <a href={leader.twitterLink2} target="_blank" rel="noopener noreferrer" className={styles.linkName}>
                          {leader.linkName2}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutTSRTCLeadership;
