import { withSSRContext } from "aws-amplify";
import awsExports from "@/aws-exports";
import { listProjects } from "@/graphql/queries";
import { Fragment, useContext, useEffect, useRef } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { DataStore } from "@aws-amplify/datastore";
import Head from "next/head";

import { BadReception, ItemStatus, Project } from "@/models";
import HeadsUpDisplay from "../../components/home-page/heads-up-display";
import SlideshowContext from "../../store/slideshow-context";

const ProjectPage = ({
  projects,
  projectIndex,
  videoList,
}: {
  projects: Project[];
  projectIndex: number;
  videoList: BadReception[];
}) => {
  const slideCtx = useContext(SlideshowContext);
  const { title } = projects[projectIndex];
  const { focus } = slideCtx!;

  let newTitle = `⚡︎ ATD | ${title}`;
  useEffect(() => {
    focus(projectIndex);
  }, [projectIndex, focus]);
  return (
    <Fragment>
      <Head>
        <title>{newTitle}</title>
        <meta name="description" content={projects[projectIndex].description} />
      </Head>
      <HeadsUpDisplay
        projects={projects}
        videoList={videoList}
        focused={true}
      />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const models = await DataStore.query(Project, (c) =>
    c.status!.eq(ItemStatus.ACTIVE)
  );
  const projects = await JSON.parse(JSON.stringify(models));
  const videoList = await DataStore.query(BadReception);

  const projectid = context.params!.projectid;

  let projectIndex: number;

  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id == projectid) {
      projectIndex = i;
      break;
    }
  }

  return {
    props: {
      projects: projects,
      videoList: JSON.parse(JSON.stringify(videoList)),
      projectIndex: projectIndex!,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const models = await DataStore.query(Project, (c) =>
    c.status!.eq(ItemStatus.ACTIVE)
  );
  const projects = await JSON.parse(JSON.stringify(models));

  const projectIds = projects.map((project: Project) => ({
    params: { projectid: project.id },
  }));

  return {
    paths: projectIds,
    fallback: true,
  };
};

export default ProjectPage;
