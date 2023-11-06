import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, ItemStatus } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext, Predicates } from "aws-amplify";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_LENGTH = 5;

const BlogPage = ({ blogs }: { blogs: Blog[] }) => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>(blogs);
  const [pageNum, setPageNum] = useState<number>(1);

  const fetchNextPage = async () => {
    setPageNum((prev) => prev + 1);
    //console.log("call next page", pageNum);
    const models = await DataStore.query(
      Blog,
      (c) => c.status!.eq(ItemStatus.ACTIVE),
      {
        sort: (s) => s.publishDate("DESCENDING"),
        page: pageNum,
        limit: PAGE_LENGTH,
      }
    );
    setBlogPosts((prev) => [...prev, ...models]);
  };

  // useEffect(() => {
  //   if (pageNum == 0) {
  //     return;
  //   }
  //   console.log("call next", pageNum);
  //
  //   fetchNextPage();
  // }, [pageNum]);

  //console.log("number of blogs", blogPosts.length);

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
      <div id="blogHolder" className={styles.blogHolder}>
        <div className={styles.innerContainer}>
          <InfiniteScroll
            dataLength={blogPosts.length} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={true}
            scrollableTarget="blogHolder"
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {blogPosts.map((post, i) => {
              return (
                <BlogPost
                  key={`${i}-${post.id}`}
                  post={post}
                  priority={i == 0}
                />
              );
            })}
          </InfiniteScroll>
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
