import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, ItemStatus } from "../../models";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";

const BlogPage = ({
  blogs,
  blogIndex,
}: {
  blogs: Blog[];
  blogIndex: number;
}) => {
  const blog = blogs[blogIndex];
  return (
    <div className={styles.Blog}>
      <Head>
        <title>⚡︎ ATD | Blog</title>
        {blog.title && <meta name="description" content={blog.title} />}
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
  const models = await DataStore.query(Blog, (c) =>
    c.status!.eq(ItemStatus.ACTIVE)
  );

  const blogs = await JSON.parse(JSON.stringify(models));
  const blogid = context.params!.blogid;

  let blogIndex: number;

  for (let i = 0; i < blogs.length; i += 1) {
    if (blogs[i].id == blogid) {
      blogIndex = i;
      break;
    }
  }

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
      blogIndex: blogIndex!,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const models = await DataStore.query(Blog, (c) =>
    c.status!.eq(ItemStatus.ACTIVE)
  );
  const blogs = await JSON.parse(JSON.stringify(models));

  const blogIds = blogs.map((blog: Blog) => ({
    params: {
      blogid: blog.id,
    },
  }));

  return {
    paths: blogIds,
    fallback: true,
  };
};

export default BlogPage;
