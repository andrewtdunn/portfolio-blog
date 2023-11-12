import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, FeaturedStatus, ItemStatus } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext, Predicates } from "aws-amplify";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import YearFilter from "../../../components/blog/year-filter";
import { albertusFont } from "../../../components/bio/bio-post";
import FeaturedPostButton from "../../../components/blog/featuredPostButton";
import Title from "../../../components/utils/title";
import { SortDirection } from "aws-amplify";

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
  const [currYear, setCurrYear] = useState<string>(year);
  const [currPage, setCurrPage] = useState<number>(1);
  const [featuredPost, setFeaturedPost] = useState<Blog | null>(null);

  const onYearSelection = async (year: string) => {
    setFeaturedPost(null);
    setCurrYear(year);
    // setCurrPage(1);

    // console.log("call for models by year ", year);
    // setBlogPosts([]);
    // const models = await DataStore.query(
    //   Blog,
    //   (c) =>
    //     c.and((c) => [
    //       c.publishDate.contains(year),
    //       c.status.eq(ItemStatus.ACTIVE),
    //     ]),
    //   {
    //     page: 0,
    //     limit: PAGE_LENGTH,
    //     sort: (s) => s.publishDate(SortDirection.DESCENDING),
    //   }
    // );
    // console.log(models);
    // setBlogPosts(models);
  };

  const onSetFeaturedModel = (model: Blog) => {
    setFeaturedPost(model);
  };

  const fetchNextPage = async () => {
    setCurrPage((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(currYear);
  }, [currYear]);

  const getYear = useCallback(() => currYear, [currYear]);
  const setYear = useCallback((year: string) => {
    setCurrYear(year);
    setCurrPage(0);
  }, []);

  useEffect(() => {
    console.log("CurrPage Effect ", currPage);
    console.log("currentYear", getYear());
    console.log("* * * * * * * * * * * *");
    const getModels = async () => {
      const models = await DataStore.query(
        Blog,
        (c) =>
          c.and((c) => [
            c.publishDate.contains(getYear()),
            c.status.eq(ItemStatus.ACTIVE),
          ]),
        {
          page: currPage,
          limit: PAGE_LENGTH,
          sort: (s) => s.publishDate(SortDirection.DESCENDING),
        }
      );
      console.log(models);
      setBlogPosts((prev) => [...prev, ...models]);
      if (models.length < PAGE_LENGTH) {
        if (parseInt(getYear()) > 2007) {
          setYear((parseInt(getYear()) - 1).toString());
        }
      }
      //setCurrPage(currPage + 1);
    };

    // setFeaturedPost(null);
    // setCurrYear(year);
    // setCurrPage(1);

    // console.log("call for models by year ", year);
    // setBlogPosts([]);
    // const models = await DataStore.query(
    //   Blog,
    //   (c) =>
    //     c.and((c) => [
    //       c.publishDate.contains(year),
    //       c.status.eq(ItemStatus.ACTIVE),
    //     ]),
    //   {
    //     page: 0,
    //     limit: PAGE_LENGTH,
    //     sort: (s) => s.publishDate(SortDirection.DESCENDING),
    //   }
    // );
    // console.log(models);
    // setBlogPosts(models);
    getModels();
  }, [currPage, getYear, setYear, setBlogPosts]);

  useEffect(() => {
    console.log("Year Effect ", currYear);
    // setFeaturedPost(null);
    // setCurrYear(year);
    // setCurrPage(1);

    // console.log("call for models by year ", year);
    // setBlogPosts([]);
    // const models = await DataStore.query(
    //   Blog,
    //   (c) =>
    //     c.and((c) => [
    //       c.publishDate.contains(year),
    //       c.status.eq(ItemStatus.ACTIVE),
    //     ]),
    //   {
    //     page: 0,
    //     limit: PAGE_LENGTH,
    //     sort: (s) => s.publishDate(SortDirection.DESCENDING),
    //   }
    // );
    // console.log(models);
    // setBlogPosts(models);
    // let pageNum;
    // if (reset) {
    //   pageNum = 0;
    // } else if (currPage == 0 && blogPosts.length > 0) {
    //   pageNum = 1;
    // } else {
    //   pageNum = currPage;
    // }
    // console.log("fetchNextPage: ", currPage, " year: ", currYear);

    // const models = await DataStore.query(
    //   Blog,
    //   (c) =>
    //     c.and((c) => [
    //       c.publishDate.contains(currYear),
    //       c.status.eq(ItemStatus.ACTIVE),
    //     ]),
    //   {
    //     page: pageNum,
    //     limit: PAGE_LENGTH,
    //     sort: (s) => s.publishDate(SortDirection.DESCENDING),
    //   }
    // );
    // setBlogPosts((prev) => [...prev, ...models]);
    // console.log("models found: ", models.length);
    // models.forEach((model, index) =>
    //   console.log(index, model.title ? model.title : "untitled")
    // );
    // if (models.length == PAGE_LENGTH) {
    //   setCurrPage((prev) => prev + 1);
    // } else {
    //   console.log("SETTING A YEAR BACK");
    //   setCurrPage(0);
    //   setCurrYear((prev) => (parseInt(prev) - 1).toString());
    // }
    // if (models.length == 0) {
    //   fetchNextP
  }, [currYear]);

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
        callback={onYearSelection}
      />
      {featuredBlogs && (
        <div className={styles.featuredPosts}>
          <Title>FEATURED POSTS</Title>
          <div className={styles.postButtons}>
            {featuredBlogs.map((blog, index) => (
              <FeaturedPostButton
                key={index}
                model={blog}
                callback={onSetFeaturedModel}
              />
            ))}
          </div>
        </div>
      )}

      <div id="blogHolder" className={styles.blogHolder}>
        <div className={styles.innerContainer}>
          {featuredPost ? (
            <BlogPost post={featuredPost} priority={false} backLink={false} />
          ) : (
            <InfiniteScroll
              dataLength={blogPosts.length} //This is important field to render the next data
              next={fetchNextPage}
              hasMore={parseInt(currYear) > parseInt(START_YEAR) - 1}
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
                  }}
                  className={albertusFont.className}
                >
                  That&apos;s All Folks!!
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
          )}
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
