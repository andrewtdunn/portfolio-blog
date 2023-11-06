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
};

const BlogPost: FC<BlogProps> = ({ post, priority }) => {
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

  const slideImages = slides?.map(
    (slide) => `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${slide}`
  );
  const uniqSlides = [...new Set(slideImages)];

  // human readable date
  const [year, month, day] = publishDate?.split("-")!;
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const dateString = date.toDateString();

  return (
    <div className={styles.Post}>
      <article>
        {title && <h1 className={albertusFont.className}>{title}</h1>}
        <hr />
        {uniqSlides && uniqSlides.length > 0 && (
          <div className={styles.fader}>
            <CrossFadingImages
              width={slideWidth}
              height={slideHeight}
              slides={uniqSlides}
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
