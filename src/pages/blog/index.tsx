import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, ItemStatus } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext, Predicates } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import YearFilter from "../../../components/blog/year-filter";
import { albertusFont } from "../../../components/bio/bio-post";

const PAGE_LENGTH = 5;
const START_YEAR = "2008";

const BlogPage = ({ blogs, year }: { blogs: Blog[]; year: string }) => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>(blogs);
  const [pageNum, setPageNum] = useState<number>(1);
  const [currYear, setCurrYear] = useState<string>(year);

  //const currYearRef = useRef(currYear);
  const prevYearRef = useRef<string>(currYear);
  const currYearRef = useRef<string>(currYear);

  const fetchNextPage = async () => {
    // console.log(
    //   `fetchPageNum prev: ${prevYearRef.current.valueOf()} curr: ${currYear}`
    // );

    setPageNum((prev) => prev + 1);
  };

  const yearSelection = (year: string) => {
    //console.log("yearSelection", year);
    setCurrYear(year);
    setPageNum(0);
    setBlogPosts([]);
  };

  useEffect(() => {
    const getModels = async () => {
      //console.log("query - ", currYear, pageNum);
      const models = await DataStore.query(
        Blog,
        (c) =>
          c.and((c) => [
            c.status!.eq(ItemStatus.ACTIVE),
            c.publishDate.contains(currYear),
          ]),
        {
          sort: (s) => s.publishDate("DESCENDING"),
          page: pageNum,
          limit: PAGE_LENGTH,
        }
      );
      // console.log(
      //   `PrevYear: ${prevYearRef.current.valueOf()} - CurrYear: ${currYear}  Models Requested: ${PAGE_LENGTH} - Models Received ${
      //     models.length
      //   } - pageNum: ${pageNum}`
      // );

      prevYearRef.current = currYearRef.current.valueOf();

      if (models.length == 0) {
        setCurrYear((prev) => (parseInt(prev) - 1).toString());
        setPageNum(0);
      }

      setBlogPosts((prev) => [...prev, ...models]);
    };
    getModels();
  }, [pageNum, currYear]);

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
      <Fader hasCrack={true} />
      <YearFilter
        startYear={START_YEAR}
        endYear={year}
        currYear={currYear}
        callback={yearSelection}
      />
      <div id="blogHolder" className={styles.blogHolder}>
        <div className={styles.innerContainer}>
          <InfiniteScroll
            dataLength={blogPosts.length} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={parseInt(currYear) > 2007}
            scrollableTarget="blogHolder"
            loader={
              <h4
                style={{
                  textAlign: "center",
                  paddingBottom: "200px",
                  color: "rgb(200,200,200)",
                  fontSize: "2em",
                }}
                className={albertusFont.className}
              >
                Loading...
              </h4>
            }
            endMessage={
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "200px",
                  color: "rgb(200,200,200)",
                  fontSize: "2em",
                }}
                className={albertusFont.className}
              >
                <b>THAT&apos;S ALL FOLKS !!!</b>
              </p>
            }
          >
            {blogPosts.map((post, i) => {
              return (
                <BlogPost
                  key={`${i}-${post.id}`}
                  post={post}
                  priority={i == 0}
                  backLink={false}
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
    const date = new Date();
    const year = date.getFullYear().toString();
    const models = await DataStore.query(
      Blog,
      (c) =>
        c.and((c) => [
          c.status!.eq(ItemStatus.ACTIVE),
          c.publishDate.contains(year),
        ]),
      { sort: (s) => s.publishDate("DESCENDING"), page: 0, limit: PAGE_LENGTH }
    );

    return {
      props: {
        year,
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
