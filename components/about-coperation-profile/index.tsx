import BulletPoints from "../bullet-points";
import Tables from "../tables";
import styles from "./index.module.css";
interface AboutProfile {
  profileData?: any;
}
const AboutCoperationProfile: React.FC<AboutProfile> = ({ profileData }) => {
  return (
    <div className={styles.container}>
      <p className={styles.profileHeading}>{profileData?.profileHeading}</p>
      <div className={styles.bulletPointsContainer}>
        <p className={styles.bulletPointsHeading}>
          {profileData?.bulletPointsHeading}
        </p>
        <BulletPoints
          containerClassName={styles.bulletpoints}
          items={profileData?.formationData}
        />
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.tsrtcAtAGlanceText}>{profileData?.tsrtcAtAGlanceText}</p>
        <Tables rows={profileData?.overViewData} />
        <Tables rows={profileData?.numberOfTotalBusesData} />
        <Tables rows={profileData?.fleetData} />
        <Tables rows={profileData?.operationalKeyIndicators} />
        <Tables rows={profileData?.mechanicalKeyIndicators} />
        <Tables rows={profileData?.personalKeyIndicators} />
        <Tables rows={profileData?.financialPerformance} />
        <p className={styles.tsrtcAtAGlanceText}>{profileData?.uptoMonthAprilText}</p>
        <Tables rows={profileData?.uptoAprilMonthData} />
      </div>
    </div>
  );
};
export default AboutCoperationProfile;
