import Image from "next/image";
import styles from "./blog-image.module.scss";
import { HeroAlignment, HeroSize } from "@/models";
import "@aws-amplify/ui-react/styles.css";

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
  return (
    <div className={styles.BlogImage}>
      <Image
        src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${image}`}
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
