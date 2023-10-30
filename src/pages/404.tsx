import Head from "next/head";
import styles from "./404.module.scss";
import Title from "../../components/utils/title";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Head>
        <title>⚡︎ ATD | Page Not Found</title>
      </Head>
      <div>
        <Title>404 File Not Found</Title>
      </div>
    </div>
  );
};

export default NotFound;
