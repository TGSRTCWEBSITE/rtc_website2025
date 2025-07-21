import { UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";
interface InfrastructureProps {
  infrastructureText: string;
  infrastructureCards: any;
  infrastructureOfTGSRTC: string;
}
const Infrastructure: React.FC<InfrastructureProps> = ({
  infrastructureText,
  infrastructureCards,
  infrastructureOfTGSRTC,
}) => {
  return (
    <div className={styles.infrastructureContainer}>
      <p className={styles.infrastructureText}>{infrastructureText}</p>
      <p className={styles.infrastructureOfTGSRTC}>{infrastructureOfTGSRTC}</p>
      <div className={styles.cards}>
        {infrastructureCards?.map((card: any,index:number) => (
          <div className={styles.card} key={index}>
            <img
              className={styles.cardImage}
              src={UPLOADS_BASE_URL + card.image}
            />
            <p className={styles.cardHeading}>{card.heading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Infrastructure;
