import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "../../models";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import { withSSRContext } from "aws-amplify";

const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <div className={styles.Blog}>
      <Head>
        <title>⚡︎ ATD | Blog</title>
        <meta name="description" content={blog.title ? blog.title : "none"} />
      </Head>
      <Header
        includeBanner={false}
        dark={true}
        subheader="Tous Les Jours C'est Pas La Même"
      />
      <Fader />
      <div id="blogHolder" className={styles.blogHolder}>
        <div className={styles.inner}>
          <BlogPost post={blog} priority={true} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const SSR = withSSRContext();
  const blogid = context.params!.blogid?.toString();
  try {
    const model = await DataStore.query(Blog, blogid!);

    return {
      props: {
        blog: JSON.parse(JSON.stringify(model)),
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

export const getStaticPaths: GetStaticPaths = async () => {
  const models = await DataStore.query(Blog);
  const blogs = await JSON.parse(JSON.stringify(models));

  const blogIds = blogs.map((blog: Blog) => ({
    params: {
      blogid: blog.id,
    },
  }));

  return {
    paths: blogIds,
    fallback: false,
  };
};

export default BlogPage;
