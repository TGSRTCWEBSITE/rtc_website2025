import React, { useEffect, useState } from 'react';
import styles from './index.module.css'; 
import { UPLOADS_BASE_URL } from '../../services/service';

interface ImageWithCaptionProps {
    src: string;
    caption: string;
    isSingleImage: boolean; 
    additionalClassName?: string;
    additionalImageSection?: string;
    additionalImage?: string;
    additionalMobileImage?: string;
    mobileSrc?: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ 
    src, 
    caption, 
    isSingleImage, 
    additionalClassName, 
    additionalImageSection, 
    additionalImage, 
    additionalMobileImage, 
    mobileSrc 
}) => {
    const [width, setWidth] = useState<boolean>(false);
    const conditionalClass= isSingleImage ? styles.singleImage : styles.multipleImage;
    const imageClass = `${conditionalClass} ${additionalImage}`;
    const mobileImageClass = `${conditionalClass} ${additionalMobileImage}`;
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 750);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className={`${isSingleImage ? styles.singleContainer : styles.multipleContainer} ${additionalClassName}`}>
            <div className={`${isSingleImage ? styles.singleImageSection : styles.multipleImageSection} ${additionalImageSection}`}>
                {
                    width ? (
                        <img src={`${UPLOADS_BASE_URL}${src}`} alt="image" className={` ${imageClass}`} />
                    ) : (
                        <img src={`${UPLOADS_BASE_URL}${mobileSrc}`} alt="image" className={`${mobileImageClass}`} />
                    )
                }
            </div>
            <div className={styles.caption}>{caption}</div>
        </div>
    );
}

export default ImageWithCaption;
