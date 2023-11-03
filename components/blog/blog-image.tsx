import Image from "next/image";
import styles from "./blog-image.module.scss";
import { useEffect, useState } from "react";
import { Storage } from "@aws-amplify/storage";
import { HeroAlignment, HeroSize } from "@/models";

export type BlogImageType = {
  image: string;
  heroAlignment?: HeroAlignment;
  heroSize?: HeroSize;
  title: string;
  priority: boolean;
};

const BlogImage = ({
  image,
  heroAlignment,
  heroSize,
  title,
  priority,
}: BlogImageType) => {
  const [webImage, setWebImage] = useState<any>("");

  useEffect(() => {
    const fetchImage = async () => {
      const s3Image = await Storage.get(image, { level: "public" });
      setWebImage(s3Image);
    };

    fetchImage();
  }, [image]);
  return (
    <div className={styles.BlogImage}>
      <Image
        src={webImage}
        alt={title}
        width={500}
        height={500}
        className={`${styles.image} ${
          heroSize == HeroSize.THUMB && styles.thumb
        } ${heroAlignment == HeroAlignment.LEFT && styles.left}  ${
          heroAlignment == HeroAlignment.RIGHT && styles.right
        }`}
        priority={priority}
      />
    </div>
  );
};

export default BlogImage;
