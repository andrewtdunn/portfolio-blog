import { GetStaticProps } from "next";
import HeadsUpDisplay from "../../components/home-page/heads-up-display";
import { Fragment } from "react";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { BadReception, Project } from "../../src/models";
import { withSSRContext } from "aws-amplify";

const HomePage = ({
  projects,
  videoList,
}: {
  projects: Project[];
  videoList: BadReception[];
}) => {
  return (
    <Fragment>
      <Head>
        <title>⚡︎ ATD | Projects</title>
      </Head>
      <HeadsUpDisplay projects={projects} videoList={videoList} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const models = await DataStore.query(Project);
    const videoList = await DataStore.query(BadReception);

    return {
      props: {
        projects: JSON.parse(JSON.stringify(models)),
        videoList: JSON.parse(JSON.stringify(videoList)),
      },
      revalidate: 10,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default HomePage;
