import { Blog, Project } from "@/models";
import { DataStore } from "aws-amplify";
import { GetServerSideProps } from "next";
import { AdminModel } from "../../type-definitions/enums";
import { useContext, useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import styles from "./admin-content-list.module.scss";
import ProjectUpdateForm from "@/ui-components/ProjectUpdateForm";
import BlogUpdateForm from "@/ui-components/BlogUpdateForm";
import { SoundContext } from "../../store/sound-context";
import AdminContext from "../../store/admin-context";

const ContentList = ({ modelType }: { modelType: AdminModel }) => {
  const [models, setModels] = useState<Blog[] | Project[] | []>([]);
  const [currModel, setCurrModel] = useState<Project | Blog | null>(null);
  const soundCtx = useContext(SoundContext);
  const adminCtx = useContext(AdminContext);

  const handleClick = (model: Project | Blog) => {
    adminCtx?.setEditing(true);
    setCurrModel(model);
  };

  const resetForm = () => {
    soundCtx?.buttonNoise();
    adminCtx?.setEditing(false);
    setCurrModel(null);
  };

  useEffect(() => {
    const getModels = async () => {
      if (modelType == AdminModel.PROJECT) {
        const projects = await DataStore.query(Project);
        setModels(projects);
      } else {
        const blogs = await DataStore.query(Blog);
        setModels(blogs);
      }
    };
    if (!adminCtx?.editing) {
      getModels();
    }
  }, [modelType, adminCtx]);

  if (adminCtx?.editing && currModel) {
    if (modelType == AdminModel.PROJECT) {
      return (
        <ProjectUpdateForm
          project={currModel as Project}
          onSuccess={resetForm}
        />
      );
    } else if (modelType == AdminModel.BLOG) {
      return <BlogUpdateForm blog={currModel as Blog} onSuccess={resetForm} />;
    }
  }
  return (
    <ul className={styles.AdminContentList}>
      {models.map((model, index) => (
        <li key={index}>
          <div className={styles.editLogo} onClick={() => handleClick(model)}>
            <h3>{model.title}</h3>
            <GrEdit className={styles.pencil} color="white" fontSize="1.5em" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const models = await DataStore.query(Blog);
  return {
    props: {
      projects: JSON.parse(JSON.stringify(models)),
    },
  };
};

export default ContentList;
