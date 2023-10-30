import TypeWriter from "typewriter-effect";
import styles from "./nametag.module.scss";
import localFont from "next/font/local";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

export const tapeFont = localFont({
  src: "../../public/fonts/Impact_Label-webfont.woff",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const Nametag = ({ home }: { home: Boolean }) => {
  const today = new Date();
  // const tomorrow = new Date(today);
  // tomorrow.setDate(tomorrow.getDate() + 1);
  const dateString = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  }).format(today);
  return (
    <div className={`${styles.Nametag} ${tapeFont.className}`}>
      <>
        <h1
          className={`{${styles.nametag_h1} ${styles.tag1} ${vt323.className} ${
            home && styles.home
          }`}
        >
          <span> {process.env.NEXT_PUBLIC_USERNAME} </span>
        </h1>
        <div className={styles.dateHolder}>
          <h1
            className={`${styles.nametag_h1} ${styles.tag2} ${
              home && styles.home
            }`}
          >
            <span> {dateString} </span>
          </h1>
        </div>
        <h2 className={`${vt323.className} ${home && styles.home}`}>
          <TypeWriter
            options={{
              strings: ["Multron Systems", "Multi-Phasic"],
              autoStart: true,
              loop: true,
              delay: 10,
              deleteSpeed: 10,
              cursor: " ",
              // @ts-ignore
              pauseFor: 60000,
            }}
          />
        </h2>
      </>
    </div>
  );
};

export default Nametag;
