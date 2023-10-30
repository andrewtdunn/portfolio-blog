import {
  FaVolumeOff,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";
import styles from "./volume-button.module.scss";
import { useContext } from "react";
import { SoundContext } from "../../store/sound-context";

const VolumeButton = ({ home }: { home: Boolean }) => {
  const soundCtx = useContext(SoundContext);
  const soundOn = soundCtx?.isPlaying;
  const clickHandler = () => {
    soundCtx?.toggleSound();
  };
  return (
    <div
      className={`${styles.VolumeButton} ${home && styles.light}`}
      onClick={clickHandler}
    >
      <div>{soundOn ? <FaVolumeUp /> : <FaVolumeOff />}</div>
    </div>
  );
};

export default VolumeButton;
