import { useContext, useEffect, useState } from "react";
import styles from "./glitchy-image.module.scss";
import Image from "next/image";
import { SoundContext } from "../../../store/sound-context";

type compProps = {
  url: string;
  slideSpeed?: number;
};

const GlitchyImage = ({ url, slideSpeed }: compProps) => {
  const soundCtx = useContext(SoundContext);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    if (!slideSpeed) return;
    function delay(time: number) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function timeOpacity() {
      setIsShown(false);
      await delay(Math.random() * 2000 + 1000);
      //let randomSound = Math.ceil(Math.random() * 8);
      //soundCtx?.buttonNoise(8);
      setIsShown(true);
      await delay(Math.random() * 2000 + 750);
      setIsShown(false);
    }

    timeOpacity();

    return () => {};
  }, [url, slideSpeed, soundCtx]);
  return (
    <div className={`${styles.GlitchyImage} ${isShown && styles.faded}`}>
      <Image
        className={styles.glitch__img}
        width={700}
        height={352}
        alt="glitch"
        src={url}
        priority
      />
      <Image
        className={styles.glitch__img}
        width={700}
        height={352}
        alt="glitch"
        src={url}
        priority
      />
      <Image
        className={styles.glitch__img}
        width={700}
        height={352}
        alt="glitch"
        src={url}
        priority
      />
      <Image
        className={styles.glitch__img}
        width={700}
        height={352}
        alt="glitch"
        src={url}
        priority
      />
    </div>
  );
};

export default GlitchyImage;
