import styles from "./index.module.css";
interface TimingsProps {
  data: string[];
}
const TimingsOfBuses: React.FC<TimingsProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((e: any) => (
        <p className={styles.time}>{e}</p>
      ))}
    </div>
  );
};
export default TimingsOfBuses;
