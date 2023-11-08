import styles from "./blog.module.scss";
import Header from "../../../components/layout/header";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { Blog, ItemStatus } from "../../models";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogPost from "../../../components/blog/blog-post";
import Fader from "../../../components/utils/fader";
import YearFilter from "../../../components/blog/year-filter";

const START_YEAR = "2008";

const BlogPage = ({ blog, year }: { blog: Blog; year: string }) => {
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
          <BlogPost post={blog} priority={true} backLink={true} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogid = context.params!.blogid as string;
  console.log("blogid", blogid);
  const model = await DataStore.query(Blog, blogid);

  if (model?.status == ItemStatus.INACTIVE) {
    return {
      notFound: true,
    };
  }

  const blog = await JSON.parse(JSON.stringify(model));

  const date = new Date();
  const year = date.getFullYear();

  return {
    props: {
      blog,
      year,
    },
    revalidate: 10,
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
    fallback: "blocking",
  };
};

export default BlogPage;
