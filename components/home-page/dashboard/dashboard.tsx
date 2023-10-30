import { useContext } from "react";
import styles from "./dashboard.module.scss";
import Typewriter from "typewriter-effect";
import NavigationContext from "../../../store/nav-context";
import { Project } from "@/models";
import SlideshowContext from "../../../store/slideshow-context";

const Dashboard = () => {
  const navigationCtx = useContext(NavigationContext);
  const slideCtx = useContext(SlideshowContext);
  const { isFocused, projects, currentIndex } = slideCtx!;
  if (!projects) return null;
  const project = projects![currentIndex];

  let strings: string[];
  if (isFocused!) {
    let newDetails = project.details!.map((detail: any) => `* ${detail}`);
    strings = [newDetails.join("<br/>")];
  } else {
    strings = [project.tagline!];
  }

  return (
    <div className={`${styles.Dashboard} ${isFocused && styles.active}`}>
      <div className={styles.inner}>
        <span className={styles.magenta}>{process.env.NEXT_PUBLIC_PROMPT}</span>
        <span className={styles.darkMagenta}> / $ </span>
        <span className={styles.white}>{project.description}</span>
        <Typewriter
          options={{
            strings: strings,
            autoStart: true,
            loop: true,
            delay: 20,
            // @ts-ignore
            pauseFor: 600000000,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
