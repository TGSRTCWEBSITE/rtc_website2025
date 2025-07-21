import type { NextPage } from "next";
import styles from "./index.module.css";


interface LabelPropsType {
    text: string;
    className?: string;
    textClassName?: string;
}

const CommonLabel: NextPage<LabelPropsType> = ({ text, className,textClassName }) => {
    return (
        <div className={[styles.label, className].join(" ")}>
            <p className={[styles.text, textClassName].join(" ")}>{text}</p>
        </div>
    );
};

export default CommonLabel;
