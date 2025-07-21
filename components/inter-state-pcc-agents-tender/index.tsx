// This is interstatepccagentstenders Component 
import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface IntersatepccagentstenderData {

    IntersatepccagentstenderText: string;
    IntersatepccagentstenderData: any;
    IntersatepccagentstenderLinks: any
}
const Intersatepccagentstender: React.FC<IntersatepccagentstenderData> = ({
    IntersatepccagentstenderData,
    IntersatepccagentstenderText,
    IntersatepccagentstenderLinks
}) => {
    return (
        <div className={styles.container}>
            <p className={styles.headingText}>{IntersatepccagentstenderText}</p>
            <CustomTable
                containerClassName={styles.tableContainer}
                rowsClassName={styles.rowClass}
                rows={IntersatepccagentstenderData} Links={IntersatepccagentstenderLinks}
            />
        </div>
    );
};
export default Intersatepccagentstender;
