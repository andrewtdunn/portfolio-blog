import { useContext } from "react";
import styles from "./slide-cover.module.scss";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import SlideshowContext from "../../../store/slideshow-context";
import { SoundContext } from "../../../store/sound-context";

const SlideCover = () => {
  const slideCtx = useContext(SlideshowContext);
  const soundCtx = useContext(SoundContext);
  const { projects, currentIndex, focus, isFocused } = slideCtx!;
  const slideForward = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex == projects?.length!) {
      nextIndex = 0;
    }
    if (!isFocused) {
      soundCtx?.playBridgeSound();
      soundCtx?.playPowerDownSound();
    }
    focus(nextIndex);
  };
  const slideBackward = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = projects?.length! - 1;
    }
    if (!isFocused) {
      soundCtx?.playBridgeSound();
      soundCtx?.playPowerDownSound();
    }
    focus(prevIndex);
  };
  return (
    <div className={styles.SlideCover}>
      <div className={styles.left} onClick={slideBackward}>
        <FaArrowCircleLeft className={styles.leftArrow} />
      </div>
      <div className={styles.right} onClick={slideForward}>
        <FaArrowCircleRight className={styles.rightArrow} />
      </div>
    </div>
  );
};

export default SlideCover;
