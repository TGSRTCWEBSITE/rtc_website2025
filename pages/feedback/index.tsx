import styles from "./index.module.css";
import FeedbackForm from '../../components/FeedbackForm';
import { doFetch } from '../../services/service';

export async function getStaticProps() {
    const data = await doFetch("/contact-uses?populate=*");

    return {
        props: {
            data,
            title: "Feedback",
        },
    };
}

const ContactUs = ({ data }) => {

    return (
        <div className={styles.contactUs}>
            <section className={styles.heroSection}>
                <div className={styles.contactUsContent}>
                    <div className={styles.contactContentRight}>
                        {/* passed data as totaldata to acess data in the feedback component */}
                        <FeedbackForm TotalData={data} />
                    </div>
                </div>
            </section>

        </div>
    )
}
export default ContactUs;