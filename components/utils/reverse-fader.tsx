import { useEffect, useState } from "react";
import styles from "./reverse-fader.module.scss";

const ReverseFader = () => {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const darkTimer = setTimeout(() => {
      setLight(true);
    }, 500);
    return () => clearTimeout(darkTimer);
  }, []);
  return (
    <div className={`${styles.ReverseFader} ${light && styles.light}`}></div>
  );
};

export default ReverseFader;
