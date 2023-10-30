import styles from "./contact.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import Fader from "../../../components/utils/fader";
import ContactForm from "../../../components/contact/contact-form";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Head>
        <title>⚡︎ ATD | Contact</title>
      </Head>
      <Header includeBanner={false} dark={true} subheader="Contact" />
      <Fader />
      <ContactForm />
    </div>
  );
};

export default Contact;
