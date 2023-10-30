import Image from "next/image";
import styles from "./crossfader.module.scss";
import { useCallback, useContext, useEffect, useRef } from "react";
import NavigationContext from "../../store/nav-context";
import Slideshow from "../home-page/slideshow/slideshow";
import SlideshowContext from "../../store/slideshow-context";

type CrossFadingImagesTypes = {
  width?: number;
  height?: number;
  slides: string[];
  title?: string;
  time: number;
  fromBlog?: boolean;
  isMain?: boolean;
};

const CrossFader = ({
  slides,
  time,
  fromBlog,
  isMain,
}: CrossFadingImagesTypes) => {
  const crossfader = useRef<HTMLDivElement | null>(null);
  let rotateIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  let navCtx = useContext(NavigationContext);
  const slideCtx = useContext(SlideshowContext);
  const { leftOpen, rightOpen } = navCtx;
  const { setSecondaryIndex } = slideCtx!;

  // const crossfade = useCallback(() => {

  // }, [rotateIntervalRef, slides.length, time]);

  useEffect(() => {
    var currNum: number = 1;
    var currZ: number = slides.length + 1;
    let prevDiv: HTMLElement;
    let images = crossfader.current?.children;
    const firstChild = images?.item(0) as HTMLImageElement;
    let firstRun = 0;
    const rotateImage = () => {
      if (leftOpen || rightOpen) {
        return;
      }
      if (prevDiv) {
        prevDiv.style.opacity = "0";
      }
      if (firstRun == 0) {
        firstChild!.style.opacity = "0";
        firstRun += 100;
      } else if (firstRun == 0) {
        firstRun += 1;
      }
      let lastImage = images?.item(currNum) as HTMLImageElement;
      let newZ = currZ;
      if (isMain) {
        setSecondaryIndex(currNum % slides.length);
      }

      lastImage!.style.zIndex = `${newZ}`;
      lastImage!.style.opacity = "1";
      currNum = currNum + 1;
      currNum = currNum % slides.length;

      currZ += 1;
      //console.log(currNum, slides.length);
      prevDiv = lastImage;
    };
    if (isMain) {
      setSecondaryIndex(0);
    }

    rotateIntervalRef.current = setInterval(rotateImage, time);
    return () =>
      clearInterval(
        rotateIntervalRef.current as ReturnType<typeof setInterval>
      );
  }, [
    rotateIntervalRef,
    slides.length,
    time,
    leftOpen,
    rightOpen,
    isMain,
    setSecondaryIndex,
  ]);

  // useEffect(() => {
  //   console.log("door open", leftOpen, rightOpen);
  //   if (leftOpen || rightOpen) {
  //     console.log("clearInterval");
  //     clearInterval(
  //       rotateIntervalRef.current as ReturnType<typeof setInterval>
  //     );
  //   } else {
  //     console.log("restart Herr_Von_Muellerhoff");
  //   }
  // }, [leftOpen, rightOpen, rotateIntervalRef]);
  return (
    <div
      className={`${styles.CrossFader} ${fromBlog && styles.blogImg}`}
      ref={crossfader}
    >
      {slides.map((slide, index) => {
        let calcOpacity = index == 0 ? 1 : 0;
        return (
          <Image
            key={index}
            src={slide}
            alt={`title${index}`}
            width={700}
            height={350}
            className={styles.fadeSlide}
            style={{ zIndex: index, opacity: calcOpacity }}
          />
        );
      })}
    </div>
  );
};

export default CrossFader;
