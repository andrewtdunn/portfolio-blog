import { useEffect, useState } from "react";
import styles from "./fader.module.scss";

const Fader = ({ hasCrack }: { hasCrack?: boolean }) => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const darkTimer = setTimeout(() => {
      setDark(true);
    }, 1000);
    return () => clearTimeout(darkTimer);
  }, []);
  return (
    <div
      className={`${styles.Fader} ${dark && styles.dark} ${
        hasCrack && styles.backgroundCrack
      }`}
    ></div>
  );
};

export default Fader;
