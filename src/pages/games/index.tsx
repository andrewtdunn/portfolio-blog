import styles from "./games.module.scss";
import { tapeFont } from "../../../components/layout/nametag";
import Header from "../../../components/layout/header";
import Head from "next/head";
import Fader from "../../../components/utils/fader";

const Games = () => {
  return (
    <div className={styles.Games}>
      <Head>
        <title>⚡︎ ATD | Games</title>
      </Head>
      <Header includeBanner={false} dark={true} subheader="Games" />
      <Fader />
      <div className={styles.labelHolder}>
        <h2 className={tapeFont.className}> Games are on the way... </h2>
      </div>
    </div>
  );
};

export default Games;
