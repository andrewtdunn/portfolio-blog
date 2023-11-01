import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Project } from "@/models";
import { SlideshowContextType } from "../@types/slideshow";

export const SlideshowContext = createContext<SlideshowContextType | null>(
  null
);

export const SlideshowProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [innerIndex, setInnerIndex] = useState<number>(0);
  const [currentSlideImg, setCurrentSlideImage] = useState<string>("");
  const SLIDE_ROTATION_INTERVAL = 7000;
  const [isFocused, setIsFocused] = useState<boolean>(true);

  let timerInterval: any;
  const timerIntervalRef = useRef<any>(timerInterval);
  const isFocusedRef = useRef<boolean>(isFocused);

  const currRef = useRef(0);
  const previousIndexRef = useRef(0);

  const startTimer = useCallback(() => {
    clearInterval(timerIntervalRef.current);
    isFocusedRef.current = false;
    if (projects && projects?.length) {
      const timeAmount = SLIDE_ROTATION_INTERVAL;
      timerIntervalRef.current = setInterval(() => {
        previousIndexRef.current = currRef.current;
        let currInd = currRef.current + 1;
        setCurrentIndex(currInd % projects.length);
        currRef.current = currInd;
      }, timeAmount);
    }
  }, [timerIntervalRef, projects, previousIndexRef, currRef]);

  const setSecondaryIndex = useCallback((index: number) => {
    setInnerIndex(index);
  }, []);

  const restartTimer = useCallback(() => {
    setIsFocused(false);
    isFocusedRef.current = false;
    startTimer();
  }, [startTimer]);

  const stopTimer = useCallback(() => {
    setIsFocused(true);
    clearInterval(timerIntervalRef.current);
  }, [timerIntervalRef]);

  const focus = useCallback((index: number) => {
    setIsFocused(true);
    clearInterval(timerIntervalRef.current);
    setCurrentIndex(index);
    previousIndexRef.current = currRef.current;
    currRef.current = index;
    isFocusedRef.current = true;
  }, []);

  const context = {
    currentIndex,
    prevIndex: previousIndexRef.current,
    currentSlideImg,
    isFocused: isFocusedRef.current,
    focus,
    startTimer,
    stopTimer,
    setProjects,
    projects,
    slideInterval: SLIDE_ROTATION_INTERVAL,
    restartTimer,
    secondaryIndex: innerIndex,
    setSecondaryIndex,
  };

  return (
    <SlideshowContext.Provider value={context}>
      {children}
    </SlideshowContext.Provider>
  );
};

export default SlideshowContext;
