import styles from "./index.module.css";
import { doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";
import router from "next/router";

export async function getStaticProps() {
  const data = await doFetch("/site-maps?populate=*");

  return {
    props: {
      data,
      title: data?.siteMapTitle ? `${data.siteMapTitle} `: "Site Map",
    },
  };
};

const SiteMap: NextPage = ({ data }) => {
  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <section className={styles.siteMap}>
        <div className={styles.siteMapContainer}>
          <h1 className={styles.siteMapTitle}>{data?.siteMapTitle}</h1>
          <div className={styles.siteMapContent}>
            {data?.siteMapData?.map((item: any, index: number) => (
              <div className={styles.siteMapItem} key={index}>
                <ul className={styles.siteMapList}>
                  <li className={styles.listItem} key={index}>
                    <a
                      // The functionality to open a link in a new tab when the key value is E- Ticketing
                      className={styles.listItemlink}
                      onClick={(e) => {
                        if (item?.name === "E- Ticketing") {
                          window.open(item.link);
                        } else {
                          router.push(item.link);
                        }
                      }}
                    >
                      {item?.name}
                    </a>
                  </li>
                  {item?.data?.length !== 0 &&
                    item?.data?.map((listItem: { name: string, link: string }, subIndex: number) => (
                      // The functionality to open a link in a new tab when the key value is Book a E-Ticket
                      <a className={styles.listItemSubLink}
                        onClick={(e) => {
                          if (listItem?.name === "Book a E-Ticket") {
                            window.open(listItem.link);
                          } else {
                            router.push(listItem.link);
                          }
                        }}
                      >
                        {listItem.name}
                      </a>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SiteMap;