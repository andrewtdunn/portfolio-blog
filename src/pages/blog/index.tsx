import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, ItemStatus } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext, Predicates } from "aws-amplify";
import { useEffect, useState } from "react";

const PAGE_LENGTH = 50;

const BlogPage = ({ blogs }: { blogs: Blog[] }) => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>(blogs);
  const [pageNum, setPageNum] = useState<number>(0);

  // useEffect(() => {
  //   if (pageNum == 0) {
  //     return;
  //   }
  //   console.log("call next", pageNum);
  //   const fetchNextPage = async () => {
  //     console.log("call next page", pageNum);
  //     const models = await DataStore.query(
  //       Blog,
  //       (c) => c.status!.eq(ItemStatus.ACTIVE),
  //       {
  //         sort: (s) => s.publishDate("DESCENDING"),
  //         page: pageNum,
  //         limit: PAGE_LENGTH,
  //       }
  //     );
  //     setBlogPosts((prev) => [...prev, ...models]);
  //   };
  //   fetchNextPage();
  // }, [pageNum]);

  return (
    <div className={styles.Blog}>
      <Head>
        <title>⚡︎ ATD | Blog</title>
      </Head>
      <Header
        includeBanner={false}
        dark={true}
        subheader="Tous Les Jours C'est Pas La Même"
      />
      <Fader />
      <div className={styles.blogHolder}>
        <div className={styles.innerContainer}>
          {blogPosts.map((post, i) => {
            return (
              <BlogPost
                key={`${i}-${post.id}`}
                post={post}
                priority={i == 0}
                isLast={i === blogPosts.length - 1}
                newLimit={() => {
                  let nextPageNum = pageNum + 1;
                  setPageNum(nextPageNum + 1);
                  console.log(pageNum);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const SSR = withSSRContext();
  try {
    const models = await DataStore.query(
      Blog,
      (c) => c.status!.eq(ItemStatus.ACTIVE),
      { sort: (s) => s.publishDate("DESCENDING"), page: 0, limit: PAGE_LENGTH }
    );
    return {
      props: {
        blogs: JSON.parse(JSON.stringify(models)),
      },
      revalidate: 10,
    };
  } catch (err) {
    console.log("error", err);
    return {
      props: {},
    };
  }
};

export default BlogPage;
