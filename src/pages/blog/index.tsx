import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, FeaturedStatus, ItemStatus } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext } from "aws-amplify";
import { FormEvent, useCallback, useEffect, useState } from "react";
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
  const [featuredPosts, setFeaturedPosts] = useState<Blog[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const onYearSelection = async (year: string) => {
    //setFeaturedPost(null);
    //setCurrYear(year);
  };

  const onSetFeaturedModel = (model: Blog) => {
    setFeaturedPosts([model]);
  };

  const fetchNextPage = () => {
    setCurrPage((prev) => prev + 1);
  };

  const getYear = useCallback(() => currYear, [currYear]);
  const setYear = useCallback((year: string) => {
    setCurrYear(year);
    setCurrPage(0);
  }, []);

  const featuredCallback = () => {
    setFeaturedPosts(null);
    setSearchTerm("");
  };

  const onTextChange = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setSearchTerm(e.currentTarget.value);
  };

  const onInputClear = () => {
    setSearchTerm("");
  };

  const getPage = useCallback(() => currPage, [currPage]);
  const setPage = useCallback((page: number) => {
    setCurrPage(page);
  }, []);

  useEffect(() => {
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
      setBlogPosts((prev) => [...prev, ...models]);
      if (models.length < PAGE_LENGTH) {
        if (parseInt(getYear()) > 2007) {
          setYear((parseInt(getYear()) - 1).toString());
        }
      }
      //setCurrPage(currPage + 1);
    };
    getModels();
  }, [currPage, getYear, setYear, setBlogPosts]);

  useEffect(() => {
    const getPosts = async () => {
      if (searchTerm!.length < 3) {
      }
      const models = await DataStore.query(Blog, (c) =>
        c.or((c) => [c.text.contains(searchTerm), c.title.contains(searchTerm)])
      );
      const featuredModels = models.filter(
        (model) => model.status == ItemStatus.ACTIVE && model.publishDate
      );
      setFeaturedPosts(JSON.parse(JSON.stringify(featuredModels)));
    };

    if (searchTerm && searchTerm.length >= 3) {
      getPosts();
    } else {
      return setFeaturedPosts([]);
    }
  }, [searchTerm]);

  // useEffect(() => {
  //   const getYearPosts = async () => {
  //     //console.log("Year Effect ", currYear);
  //     setFeaturedPost(null);
  //     //setPage(1);

  //     //setBlogPosts([]);
  //     const models = await DataStore.query(
  //       Blog,
  //       (c) =>
  //         c.and((c) => [
  //           c.publishDate.contains(currYear),
  //           c.status.eq(ItemStatus.ACTIVE),
  //         ]),
  //       {
  //         page: 0,
  //         limit: PAGE_LENGTH,
  //         sort: (s) => s.publishDate(SortDirection.DESCENDING),
  //       }
  //     );
  //     setBlogPosts(models);
  //   };
  //   getYearPosts();
  //   setPage(1);
  // }, [currYear, setPage]);

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
      <div className={styles.searchForm}>
        <input
          value={searchTerm ? searchTerm : ""}
          onChange={onTextChange}
          className={`${albertusFont.className} ${
            featuredPosts &&
            featuredPosts?.length > 0 &&
            searchTerm &&
            searchTerm?.length >= 3
              ? styles.lit
              : ""
          }`}
          placeholder="search"
        />
        <button
          onClick={onInputClear}
          className={`${albertusFont.className} ${
            featuredPosts &&
            featuredPosts?.length > 0 &&
            searchTerm &&
            searchTerm?.length >= 3
              ? styles.lit
              : ""
          }`}
        >
          Clear
        </button>
      </div>
      {featuredBlogs && featuredBlogs.length > 0 && (
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
          {featuredPosts?.length ? (
            featuredPosts.map((post, index) => (
              <BlogPost
                key={index}
                post={post}
                priority={false}
                backLink={false}
                callback={featuredCallback}
                callbackLabel="Back to All Posts"
              />
            ))
          ) : (
            <InfiniteScroll
              dataLength={blogPosts.length} //This is important field to render the next data
              next={fetchNextPage}
              hasMore={parseInt(currYear) >= parseInt(START_YEAR) - 1}
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
              refreshFunction={() => console.log("refresh")}
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
