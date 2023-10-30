import { Project } from "@/models";
import { Dispatch, SetStateAction } from "react";

export type SlideshowContextType = {
  currentIndex: number;
  prevIndex: number;
  currentSlideImg: string;
  isFocused: boolean;

  focus: (index: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
  setProjects: (projects: Project[]) => void;
  projects: Project[] | null;
  slideInterval: number;
  restartTimer: () => void;
  secondaryIndex: number;
  setSecondaryIndex: (index: number) => void;
};
