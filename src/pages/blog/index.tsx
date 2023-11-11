import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, FeaturedStatus, ItemStatus } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext, Predicates } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import YearFilter from "../../../components/blog/year-filter";
import { albertusFont } from "../../../components/bio/bio-post";
import FeaturedPostButton from "../../../components/blog/featuredPostButton";
import Title from "../../../components/utils/title";

const PAGE_LENGTH = 5;
const START_YEAR = "2008";

const BlogPage = ({
  blogs,
  featuredBlogs,
  year,
}: {
  blogs: Blog[];
  featuredBlogs: Blog[];
  year: string;
}) => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>(blogs);
  const [pageNum, setPageNum] = useState<number>(1);
  const [currYear, setCurrYear] = useState<string>(year);
  const [featuredMode, setFeaturedMode] = useState<boolean>(false);

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
    setFeaturedMode(false);
    setCurrYear(year);
    setPageNum(0);
    setBlogPosts([]);
  };

  const setFeaturedModel = (model: Blog) => {
    setFeaturedMode(true);
    setBlogPosts([model]);
    setPageNum(0);
    setCurrYear(model.publishDate!.split("-")[0]);
  };

  useEffect(() => {
    if (featuredMode) {
      return;
    }
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
  }, [pageNum, currYear, featuredMode]);

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
      {featuredBlogs && (
        <div className={styles.featuredPosts}>
          <Title>FEATURED POSTS</Title>
          <div className={styles.postButtons}>
            {featuredBlogs.map((blog, index) => (
              <FeaturedPostButton
                key={index}
                model={blog}
                callback={setFeaturedModel}
              />
            ))}
          </div>
        </div>
      )}

      <div id="blogHolder" className={styles.blogHolder}>
        <div className={styles.innerContainer}>
          <InfiniteScroll
            dataLength={blogPosts.length} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={parseInt(currYear) > 2007 && !featuredMode}
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
                  fontSize: "1.4em",
                  cursor: "pointer",
                }}
                className={albertusFont.className}
                onClick={() => {
                  setFeaturedMode(false);
                  setBlogPosts([]);
                  setCurrYear(year);
                }}
              >
                see all posts
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
    const featuredModels = await DataStore.query(
      Blog,
      (c) => c.featured?.eq(FeaturedStatus.FEATURED),
      { sort: (s) => s.publishDate("DESCENDING"), page: 0, limit: PAGE_LENGTH }
    );

    return {
      props: {
        year,
        blogs: JSON.parse(JSON.stringify(models)),
        featuredBlogs: JSON.parse(JSON.stringify(featuredModels)),
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
