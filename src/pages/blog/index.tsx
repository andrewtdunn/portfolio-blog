import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "../../../src/models";
import { GetStaticProps } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext } from "aws-amplify";

const BlogPage = ({ blogs }: { blogs: Blog[] }) => {
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
          {blogs.map((post, i) => {
            return (
              <BlogPost key={`${i}-${post.id}`} post={post} priority={i == 0} />
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
    const models = await SSR.DataStore.query(Blog);
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
