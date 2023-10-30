import { Project } from "@/models";
import Slide from "./slide";
import styles from "./slideshow.module.scss";
import { useContext } from "react";
import FocusedSlide from "./focused-slide";
import SlideshowContext from "../../../store/slideshow-context";

const Slideshow = ({
  slideHeight,
  isMobile,
}: {
  slideHeight: number;
  isMobile: boolean;
}) => {
  let slideshowCtx = useContext(SlideshowContext);
  let { projects, currentIndex, isFocused } = slideshowCtx!;
  return (
    <div className={styles.cover}>
      <div
        className={styles.slideshow}
        style={{
          transform: `translateY(${currentIndex * -1 * slideHeight}px)`,
          transition: "transform ease-out 0.45s",
        }}
      >
        <ul className={styles.slideList}>
          {projects &&
            projects.map((project, index) => (
              <li key={project.id} className={styles.slideshow}>
                {isFocused && currentIndex == index ? (
                  <FocusedSlide
                    index={project.id}
                    project={project}
                    slideHeight={slideHeight}
                    isMobile={isMobile}
                  />
                ) : (
                  <Slide project={project} isActive={currentIndex == index} />
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Slideshow;
