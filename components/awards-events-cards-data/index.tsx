import React from "react";
import styles from "./index.module.css";
import BulletPoints from "../bullet-points";
import ImageWithCaption from "../about-card-image";

interface Image {
  src: string;
  caption: string;
  mobileSrc: string;
}

interface ContentSection {
  title?: string;
  para?: string;
  bullets?: string[];
  images?: Image[];
  backgroundColor?: string;
}

const AboutCardData = ({ data }: { data: ContentSection }) => {
  const isSingleImage = data?.images?.length === 1;
  return (
    <div className={styles.contentSection}>
      <h1 className={styles.title}>{data?.title}</h1>
      {data?.para && <p className={styles.para}>{data?.para}</p>}
      {data?.bullets && (
        <BulletPoints
          items={data?.bullets}
          containerClassName={styles.bulletFix}
        />
      )}
      {data?.images && (
        <div className={styles.imagesContainer}>
          {data?.images.map((image, index) => (
            <ImageWithCaption
              key={index}
              src={image.src}
              mobileSrc={image.mobileSrc}
              caption={image.caption}
              isSingleImage={isSingleImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutCardData;
