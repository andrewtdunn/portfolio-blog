import BlogImage from "./blog-image";
import styles from "./blog-post.module.scss";
import PostText from "./blog-text";
import { albertusFont } from "../bio/bio-post";
import { Blog, HeroAlignment } from "@/models";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import CrossFadingImages from "../utils/crossfader";
import { BlogImageType } from "./blog-image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Storage } from "aws-amplify";

type BlogProps = {
  post: Blog;
  priority: boolean;
  isLast: boolean;
  newLimit: () => void;
};

const BlogPost: FC<BlogProps> = ({ post, priority, isLast, newLimit }) => {
  const {
    id,
    title,
    image,
    text,
    dropCap,
    isTwoColumn,
    slides,
    heroAlignment,
    heroSize,
    videoId,
    publishDate,
  } = post;
  // @ts-ignore

  const slideWidth = 664;
  const slideHeight = 300;
  const [slideImages, setSlideImages] = useState<string[]>([]);
  const blogRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      console.log("slides", slides);
      const s3Images = await Promise.all(
        slides!.map(
          async (slide) => await Storage.get(slide!, { level: "public" })
        )
      );
      // dedupe s3 images
      let uniq = s3Images.filter(function (item, pos) {
        return s3Images.indexOf(item) == pos;
      });
      setSlideImages(uniq);
    };

    if (slides && slides.length) {
      console.log("slides", slides);
      fetchImages();
    }
  }, [slides]);

  useEffect(() => {
    console.log("initializing observer");

    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry);
      if (isLast && entry.isIntersecting) {
        console.log("intersection");
        observer.unobserve(entry.target);
        newLimit();
      }
    });
    if (blogRef.current) {
      observer.observe(blogRef.current);
    }
  }, [isLast, newLimit]);

  // human readable date
  const [year, month, day] = publishDate?.split("-")!;
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const dateString = date.toDateString();

  return (
    <div className={styles.Post} ref={blogRef}>
      <article>
        {title && <h1 className={albertusFont.className}>{title}</h1>}
        {isLast && <h2>IS LAST</h2>}
        <hr />
        {slideImages && slideImages.length > 0 && (
          <div className={styles.fader}>
            <CrossFadingImages
              width={slideWidth}
              height={slideHeight}
              slides={slideImages}
              time={3000}
              fromBlog={true}
            />
          </div>
        )}
        {image && heroAlignment != HeroAlignment.BOTTOM && (
          <BlogImage
            image={image}
            title={title!}
            heroSize={heroSize as BlogImageType["heroSize"]}
            heroAlignment={heroAlignment as BlogImageType["heroAlignment"]}
            priority={priority}
          />
        )}

        {text && (
          <PostText text={text} dropCap={dropCap!} twoColumn={isTwoColumn!} />
        )}

        {image && heroAlignment == HeroAlignment.BOTTOM && (
          <BlogImage
            image={image}
            title={title!}
            heroSize={heroSize as BlogImageType["heroSize"]}
            heroAlignment={heroAlignment as BlogImageType["heroAlignment"]}
            priority={priority}
          />
        )}
        {videoId && (
          <div className={styles.videoHolder}>
            <LiteYouTubeEmbed
              aspectHeight={9}
              aspectWidth={16}
              id={videoId}
              title={`Video: ${title!}`}
            />
          </div>
        )}
      </article>
      <hr />
      <div className={`${styles.postFooter} ${albertusFont.className}`}>
        <span className={styles.footerLeft}>
          <u>Comments</u> (0)
        </span>
        <span className={styles.footerRight}>{dateString}</span>
      </div>
    </div>
  );
};

export default BlogPost;
