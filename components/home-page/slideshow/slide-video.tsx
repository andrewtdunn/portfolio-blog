import { Project } from "@/models";
import styles from "./slide-video.module.scss";
import Vimeo from "@u-wave/react-vimeo";
import Image from "next/image";
import { useState } from "react";

const SlideVideo = ({
  project,
  slideHeight,
  isMobile,
}: {
  project: Project;
  slideHeight: number;
  isMobile: boolean;
}) => {
  const height = isMobile ? Math.floor(slideHeight) : 350;
  const width = isMobile ? Math.floor(2 * slideHeight) : 700;

  return (
    <div className={styles.SlideVideo}>
      <Vimeo
        video={project.vimeoId!}
        autoplay
        loop
        controls={false}
        width={width}
        height={height}
        className={styles.video}
      />
      <Image
        width={width}
        height={height}
        src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${project.image}`}
        alt={project.title}
        className={styles.placeHolderImage}
      />
    </div>
  );
};

export default SlideVideo;
