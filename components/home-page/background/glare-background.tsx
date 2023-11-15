import Image from "next/image";
import styles from "./glare-background.module.scss";
import { Project } from "@/models";
import { useContext } from "react";
import SlideshowContext from "../../../store/slideshow-context";

type GlareReflectionProps = {
  project: Project;
  image_url: string;
  lit?: boolean;
};

const GlareReflection = ({ project, image_url, lit }: GlareReflectionProps) => {
  console.log("image_url", image_url);
  const slideCtx = useContext(SlideshowContext);
  const { isFocused, secondaryIndex } = slideCtx!;
  let imageUrl: string;
  if (isFocused) {
    const secondarySlides = project.slides!.map(
      (slide) => `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${slide}`
    );
    const slides = [image_url, ...secondarySlides];
    imageUrl = slides[secondaryIndex % slides.length]!;
  } else {
    imageUrl = image_url;
  }
  return (
    <>
      {image_url && (
        <Image
          className={`${styles.GlareReflection} ${isFocused && styles.lit}`}
          src={imageUrl}
          alt={`${project.title} slide`}
          width={700}
          height={350}
          priority
        />
      )}
    </>
  );
};

export default GlareReflection;
