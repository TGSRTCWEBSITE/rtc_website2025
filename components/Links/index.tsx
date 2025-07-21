import React from 'react';
import styles from './index.module.css'
interface LinksProps {
  text: string;
}

const Links: React.FC<LinksProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.linkText}>
        <a className={styles.link} href={text} target="_blank"
          rel="noopener noreferrer"> {text}</a>
      </p>
    </div>
  );
};

export default Links;
