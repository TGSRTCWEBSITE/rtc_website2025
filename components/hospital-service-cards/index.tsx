import React from 'react';
import styles from './index.module.css';

interface HospitalServiceCardProps {
    heading: string;
    subheading?: string; 
}

const HospitalServiceCard: React.FC<HospitalServiceCardProps> = ({ heading, subheading }) => {
    return (
        <>
        <div className={styles.textCards}>
            <h3 className={styles.textCardHeading}>{heading}</h3>
            {subheading && 
                <p className={styles.textCardSubHeading}>
                {subheading}
            </p>}
        </div>
        <div className={styles.separatorLine}></div>
        </>
    );
};

export default HospitalServiceCard;
