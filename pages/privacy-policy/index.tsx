import styles from "./index.module.css";
import { doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/about-this-sites?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Privacy Policies",
    },
  };
};

const AboutThisSite: NextPageAboutThisSiteType = ({data}) => {

  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.container}>
      <div className={styles.aboutThisSite}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.aboutThisSiteTitle}>{data?.title}</h1>
          <div className={styles.aboutContent}>
            <div className={styles.disclaimer}>
              <h2 className={styles.disclaimerTitle}>
                {data?.disclaimerTitle}
              </h2>
              <div className={styles.disclaimerContent}>
                {data?.disclaimerData?.map((item: any,index:number) => (
                  <div className={styles.content} key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div className={styles.separatorLine}></div>
            <div className={styles.privacyPolicy}>
              <h2 className={styles.privacyPolicyTitle}>
                {data?.privacyPolicyTitle}
              </h2>
              <div className={styles.privacyPolicyContent}>
                {data?.privacyPolicyData?.map((item: any,index:number) => (
                  <div className={styles.content} key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutThisSite;
