import React from 'react';
import styles from './index.module.css'
interface INoteProps {
    text: string;
}
  
  const Note: React.FC<INoteProps> = ({ text }) => {
    return (
        <div className={styles.container}>
        <p className={styles.text}><span className={styles.noteText}>Note: </span>{text}</p>
      </div>
    );
  };
export default Note;