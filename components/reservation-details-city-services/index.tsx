import type { NextPage } from "next";
import ImageCards from "../logistics-business-image-card";
import styles from "./index.module.css";
import BulletPoints from "../bullet-points";
import { UPLOADS_BASE_URL } from "../../services/service";

export type FrameComponent4Type = {
  data?: {
    cityServicesTitle: string;
    electricBusData: {
      title: string;
      content: string;
      salientHeading: string;
      electricBusesBulletPoints: string[];
    };
    metroDeluxData: {
      title: string;
      content: string;
      salientHeading: string;
      metroDeluxBulletPoints: string[];
    };
    metroLuxuryTitle: string;
    metroLuxuryImage: { data: { attributes: { url: string } } };
    metroDeluxTitle: string;
    metroDeluxImage: { data: { attributes: { url: string } } };
    metroExpressTitle: string;
    metroExpressImage: { data: { attributes: { url: string } } };
  };
  className?: string;
};


const FrameComponent4: NextPage<FrameComponent4Type> = ({ data, className = "" }) => {
  return (
    <div className={[styles.cityServicesParent, className].join(" ")}>
      <h3 className={styles.cityServices}>{data?.cityServicesTitle}</h3>
      <div className={styles.cityServicesSection}>
        {/* removed the electric busses card and added in another block */}
        <div className={styles.cityServicesTypes1}>
          <h3 className={styles.metroDeluxeCoach}>{data?.metroDeluxData?.title}</h3>
          <p className={styles.metroDeluxeCoaches}>{data?.metroDeluxData?.content}</p>
        </div>
        <div>
          <div className={styles.guidingPrinciplesOf}>{data?.metroDeluxData?.salientHeading}</div>
          <BulletPoints items={data?.metroDeluxData?.metroDeluxBulletPoints} containerClassName={styles.bulletPointChange} />
        </div>
        <div className={styles.metroLuxuryAcParent}>
          <h3 className={styles.metroLuxuryAc}>{data?.metroLuxuryTitle}</h3>
          <div className={styles.imageCardsParent}>
            <ImageCards pictures={`${UPLOADS_BASE_URL}${data?.metroLuxuryImage?.data?.attributes?.url}`} />
            <div className={styles.metroTypes}>
              <div className={styles.metroDeluxeParent}>
                <b className={styles.metroDeluxe}>{data?.metroDeluxTitle}</b>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        loading="lazy"
                        alt="metro-delux"
                        src={`${UPLOADS_BASE_URL}${data?.metroDeluxImage?.data?.attributes?.url}`} 
                      />
                      <div className={styles.imagePlaceholderChild} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.metroExpressParent}>
                <h3 className={styles.metroExpress}>{data?.metroExpressTitle}</h3>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        loading="lazy"
                        alt="metro-express"
                        src={`${UPLOADS_BASE_URL}${data?.metroExpressImage?.data?.attributes?.url}`} 
                      />
                      <div className={styles.imagePlaceholderItem} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
