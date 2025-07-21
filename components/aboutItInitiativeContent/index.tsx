import React from 'react';
import styles from "./index.module.css";
import DynamicContent from '../dynamicContent';
import AboutInitiative from '../aboutInitiative';

interface ContentSection {
    title: string;
    content: string[];
    lists?: any[];
    bottomContent?: string[];
    backgroundColor: string;
}

interface Data {
    sections: ContentSection[];
}

const AboutItIntiativeContent = ({ data }: { data: Data }) => {
    return (
        <div className={styles.app}>
            {data?.sections?.map((section, index) => (
                <DynamicContent
                    key={index}
                    number={index + 1}
                    ContentComponent={() => <AboutInitiative section={section} />} 
                    backgroundColor={section.backgroundColor}
                    itemContentStyles={styles.itemContent}
                    sequenceStyles={styles.sequenceStyles}
                />
            ))}
        </div>
    );
};

export default AboutItIntiativeContent;
