import React from 'react';
import styles from './index.module.css';

interface TourismCardChipProps {
    place: string;
}

const TourismCardChip: React.FC<TourismCardChipProps> = ({ place }) => {
    return (
        <div className={styles.singleChip}>
            <div className={styles.chipContent}>{place}</div>
        </div>
    );
};

export default TourismCardChip;
