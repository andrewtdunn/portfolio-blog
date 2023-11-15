import Image from "next/image";
import styles from "./slide.module.scss";
import { Project } from "@/models";

function Slide({ project, isActive }: { project: Project; isActive: Boolean }) {
  const photoUrl = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
  return (
    <div
      key={project.id}
      className={`${styles.slide} ${isActive ? styles.active : null}`}
    >
      <Image
        src={`${photoUrl}/${project.image}`}
        alt={project.title}
        className={styles.slideImage}
        width={700}
        height={350}
        priority
      />
    </div>
  );
}

export default Slide;
