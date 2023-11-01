import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./bad-reception.module.scss";
import { DataStore } from "aws-amplify";
import { BadReception } from "@/models";

const BadReceptionScreen = ({
  isMobile,
  videoList,
}: {
  isMobile: boolean;
  videoList: BadReception[];
}) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const PLAY_INTERVAL = 6000;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const sleep = (delay: number) =>
      new Promise((resolve) => setTimeout(resolve, delay));

    const interval = setInterval(async () => {
      if (isMobile) {
        return null;
      }
      if (!document.hasFocus()) {
        return null;
      }
      if (videoRef && videoRef.current) {
        try {
          let video = videoRef.current;
          if (!video.paused) {
            video.pause();
          }
          setHidden(false);
          let randomIndex = Math.floor(Math.random() * videoList.length);
          let videoSrc = videoList[randomIndex];

          video.src = videoSrc.url!;
          if (video.paused) {
            video.play();
            setHidden(true);
            try {
              var playPromise = video.play();

              if (playPromise !== undefined) {
                playPromise
                  .then((_) => {
                    // Automatic playback started!
                    // Show playing UI.
                    setHidden(false);
                  })
                  .catch((error) => {
                    // Auto-play was prevented
                    // Show paused UI.
                    setHidden(true);
                  });
              }
            } catch (e: any) {
              console.log(e);
            }
          }
          await sleep(1000);
          if (!video.paused) {
            video.pause();
          }
          setHidden(true);
        } catch (e) {
          console.log("ERROR caught", e);
        }
      }
    }, PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [videoRef, isMobile, videoList]);

  if (isMobile) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      loop
      muted
      controls={false}
      webkit-playsinline="true"
      className={`${styles.BadReception} ${hidden && styles.hidden}`}
    ></video>
  );
};

export default BadReceptionScreen;
