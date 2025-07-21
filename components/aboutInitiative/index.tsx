import React from 'react';
import styles from "./index.module.css";
import BulletPoints from '../bullet-points';

interface BulletPoint {
    listContent: string[];
    listTitle?: string;
}

interface ContentSection {
    title: string;
    content: string[];
    lists?: BulletPoint[];
    bottomContent?: string[];
}

const AboutInitiative: React.FC<{ section: ContentSection }> = ({ section }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>{section.title}</div>
            {section?.content.map((item, index) => (
                <div className={styles.content} key={index}>{item}</div>
            ))}
            {section.lists?.map((item, index) => (
                <div className={styles.list} key={index}>
                    {item.listTitle && <div className={styles.listHeading}>{item.listTitle}</div>}
                    <BulletPoints items={item.listContent} containerClassName={styles.listStyles} dynamicStyles={styles.list} />
                </div>
            ))}
            {section?.bottomContent?.map((item, index) => (
                <div className={styles.content} key={index}>{item}</div>
            ))}
        </div>
    );
};

export default AboutInitiative;
