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
import Link from "next/link";

type BlogProps = {
  post: Blog;
  priority: boolean;
  backLink: boolean;
  callback?: () => void;
  callbackLabel?: string;
};

const BlogPost: FC<BlogProps> = ({
  post,
  priority,
  backLink,
  callback,
  callbackLabel,
}) => {
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
  var uniqSlides = slideImages!.reduce(function (a: any, b: any) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  // human readable date
  const [year, month, day] = publishDate?.split("-")!;
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const dateString = date.toDateString();

  return (
    <div className={styles.Post}>
      {callback && (
        <p
          className={`${albertusFont.className} ${styles.backLink}`}
          onClick={callback}
        >
          {callbackLabel ? callbackLabel : "Back"}
        </p>
      )}
      {!callback && backLink && (
        <Link
          href="/blog"
          className={`${albertusFont.className} ${styles.backLink}`}
        >
          All Posts
        </Link>
      )}
      <article>
        {title && <h1 className={albertusFont.className}>{title}</h1>}
        {title && <hr />}
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
            publishDate={publishDate!}
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
            publishDate={publishDate!}
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
