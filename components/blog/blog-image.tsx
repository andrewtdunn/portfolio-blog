import Image from "next/image";
import styles from "./blog-image.module.scss";

export type BlogImageType = {
  image: string;
  heroAlignment?: "TOP" | "LEFT" | "RIGHT" | "BOTTOM";
  heroSize?: "FULL" | "THUMB" | "ACTUAL";
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
  return (
    <div className={styles.BlogImage}>
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className={`${styles.image} ${heroSize == "THUMB" && styles.thumb} ${
          heroAlignment == "LEFT" && styles.left
        }  ${heroAlignment == "RIGHT" && styles.right}`}
        priority={priority}
      />
    </div>
  );
};

export default BlogImage;
