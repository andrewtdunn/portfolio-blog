import { useCallback, useContext } from "react";
import {
  FaChessKnight,
  FaChessRook,
  FaRebel,
  FaRenren,
  FaSpaceShuttle,
} from "react-icons/fa";
import styles from "./hyperspace-button.module.scss";
import SlideshowContext from "../../../store/slideshow-context";
import { SoundContext } from "../../../store/sound-context";

const HyperspaceButton = () => {
  const slidesCtx = useContext(SlideshowContext);
  const soundCtx = useContext(SoundContext);
  let { isFocused, restartTimer, focus, currentIndex } = slidesCtx!;
  const handleClick = useCallback(() => {
    if (isFocused) {
      //console.log("click restart");
      restartTimer();
      soundCtx?.playHyperspaceSound();
    } else {
      focus(currentIndex);
      soundCtx?.pauseGentrySound();
      soundCtx?.pauseHyperspaceSound();
      soundCtx?.playBridgeSound();
      soundCtx?.playPowerDownSound();
    }
  }, [soundCtx, restartTimer, isFocused, focus, currentIndex]);

  return (
    <div
      className={`${styles.HyperspaceButton} ${!isFocused && styles.hidden}`}
      onClick={handleClick}
    >
      <span className={styles.buttonText}>HYPERSPACE</span>
      <div className={styles.icons}>
        <FaRenren />
      </div>
      <span className={styles.buttonText}>BUTTON</span>
    </div>
  );
};

export default HyperspaceButton;
