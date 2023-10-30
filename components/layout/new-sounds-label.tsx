import Image from "next/image";
import { useContext } from "react";
import { SoundContext } from "../../store/sound-context";
import styles from "./new-sounds-label.module.scss";
import SlideshowContext from "../../store/slideshow-context";

const NewSoundsLabel = () => {
  const soundCtx = useContext(SoundContext);
  const clickHandler = () => {
    soundCtx?.toggleSound();
  };
  return (
    <Image
      className={styles.NewSoundsLabel}
      src="/images/newsounds_label.png"
      alt="new sounds button label"
      width={138}
      height={69}
      onClick={clickHandler}
      priority
    />
  );
};

export default NewSoundsLabel;
