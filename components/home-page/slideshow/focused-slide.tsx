import CrossFader from "../../utils/crossfader";
import styles from "./focused-slide.module.scss";
import { useCallback, useEffect } from "react";
import SlideVideo from "./slide-video";
import { Project } from "@/models";

const FocusedSlide = ({
  index,
  project,
  slideHeight,
  isMobile,
}: {
  index: string;
  project: Project;
  slideHeight: number;
  isMobile: boolean;
}) => {
  const newSlides = [project.image, ...project.slides!] as string[];
  const useVideo = project.showcaseType == "VIDEO";
  if (useVideo) {
    return (
      <SlideVideo
        project={project}
        isMobile={isMobile}
        slideHeight={slideHeight}
      />
    );
  }
  const slideImages = newSlides?.map(
    (slide) => `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${slide}`
  );
  console.log(slideImages);
  return (
    <CrossFader
      title={project.id}
      width={700}
      height={350}
      slides={slideImages}
      time={3000}
      isMain={true}
    />
  );
};

export default FocusedSlide;
