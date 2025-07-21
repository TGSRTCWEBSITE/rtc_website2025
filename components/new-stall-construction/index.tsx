
// this is a new-stall-construction component 

import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface NewStallConstructionData {

    NewStallConstructionText: string;
    NewStallConstructionData: any;
    NewStallConstructionLinks: any
}
const NewStallConstruction: React.FC<NewStallConstructionData> = ({
    NewStallConstructionData,
    NewStallConstructionText,
    NewStallConstructionLinks
}) => {
    return (
        <div className={styles.container}>
            <p className={styles.headingText}>{NewStallConstructionText}</p>
            <CustomTable
                containerClassName={styles.tableContainer}
                rowsClassName={styles.rowClass}
                rows={NewStallConstructionData} Links={NewStallConstructionLinks}
            />
        </div>
    );
};
export default NewStallConstruction;
