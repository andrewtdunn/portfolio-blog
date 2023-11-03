import { Blog, ItemStatus, Project } from "@/models";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { GetServerSideProps } from "next";
import { AdminModel } from "../../type-definitions/enums";
import { useContext, useEffect, useState } from "react";
import { MdOutlineEditNote, MdStarRate } from "react-icons/md";
import styles from "./admin-content-list.module.scss";
import ProjectUpdateForm from "@/ui-components/ProjectUpdateForm";
import BlogUpdateForm from "@/ui-components/BlogUpdateForm";
import { SoundContext } from "../../store/sound-context";
import AdminContext from "../../store/admin-context";
import Image from "next/image";
import { Pagination, usePagination } from "@aws-amplify/ui-react";

const PAGELIMIT: number = 10;

const ContentList = ({
  modelType,
  isAdmin,
  totalPages = 10,
}: {
  modelType: AdminModel;
  isAdmin: boolean;
  totalPages?: number;
}) => {
  const [models, setModels] = useState<Blog[] | Project[] | []>([]);
  const [currModel, setCurrModel] = useState<Project | Blog | null>(null);
  const soundCtx = useContext(SoundContext);
  const adminCtx = useContext(AdminContext);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const getPage = async () => {
    let newModelType = modelType == AdminModel.BLOG ? Blog : Project;
    const models = await DataStore.query(Blog, Predicates.ALL, {
      sort: (s) => s.publishDate(SortDirection.DESCENDING),
      page: currentPageIndex - 1,
      limit: PAGELIMIT,
    });
    setModels(models);
  };

  const paginationProps = usePagination({
    totalPages: 8,
    currentPage: currentPageIndex,
  });

  const handleClick = (model: Project | Blog) => {
    adminCtx?.setEditing(true);
    setCurrModel(model);
  };

  const resetForm = () => {
    soundCtx?.buttonNoise();
    adminCtx?.setEditing(false);
    setCurrModel(null);
  };

  const handleNextPage = () => {
    console.log("handleNextPage");
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const handlePreviousPage = () => {
    console.log("handlePreviousPage");
    setCurrentPageIndex(currentPageIndex - 1);
  };

  const handleOnChange = (newPageIndex: any, prevPageIndex: any) => {
    console.log(
      `handleOnChange \n - newPageIndex: ${newPageIndex} \n - prevPageIndex: ${prevPageIndex}`
    );
    setCurrentPageIndex(newPageIndex);
    getPage();
  };

  useEffect(() => {
    const getModels = async () => {
      if (modelType == AdminModel.PROJECT) {
        const projects = await DataStore.query(Project);
        setModels(projects);
      } else {
        const blogs = await DataStore.query(Blog, Predicates.ALL, {
          sort: (s) => s.publishDate(SortDirection.DESCENDING),
          page: currentPageIndex - 1,
          limit: PAGELIMIT,
        });
        // const blogs = await DataStore.query(Blog, Predicates.ALL, {
        //   sort: (s) => s.publishDate(SortDirection.DESCENDING),
        // });
        setModels(blogs);
      }
    };
    if (!adminCtx?.editing) {
      getModels();
    }
  }, [modelType, adminCtx, currentPageIndex]);

  if (adminCtx?.editing && currModel) {
    if (modelType == AdminModel.PROJECT && isAdmin) {
      return (
        <ProjectUpdateForm
          project={currModel as Project}
          onSuccess={resetForm}
          onSubmit={(fields) => {
            // Example function to trim all string inputs
            const updatedFields = {};
            Object.keys(fields).forEach((key) => {
              // @ts-ignore
              if (typeof fields[key] === "string") {
                // @ts-ignore
                updatedFields[key] = fields[key].trim();
              } else {
                // @ts-ignore
                updatedFields[key] = fields[key];
              }
              if (key == "slides" && fields[key]) {
                let uniq = fields[key]!.filter(function (item, pos) {
                  return fields[key]!.indexOf(item) == pos;
                });
                // @ts-ignore
                updatedFields[key] = uniq;
              }
            });

            return updatedFields;
          }}
        />
      );
    } else if (modelType == AdminModel.BLOG && isAdmin) {
      return (
        <BlogUpdateForm
          blog={currModel as Blog}
          onSuccess={resetForm}
          onSubmit={(fields) => {
            // Example function to trim all string inputs
            const updatedFields = {};
            Object.keys(fields).forEach((key) => {
              // @ts-ignore
              if (typeof fields[key] === "string") {
                // @ts-ignore
                updatedFields[key] = fields[key].trim();
              } else {
                // @ts-ignore
                updatedFields[key] = fields[key];
              }
              if (key == "slides" && fields[key]) {
                let uniq = fields[key]!.filter(function (item, pos) {
                  return fields[key]!.indexOf(item) == pos;
                });
                // @ts-ignore
                updatedFields[key] = uniq;
              }
            });

            return updatedFields;
          }}
        />
      );
    }
  }
  return (
    <>
      <Pagination
        currentPage={currentPageIndex}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
        onChange={handleOnChange}
      />
      <ul className={styles.AdminContentList}>
        {models.map((model, index) => (
          <li key={index}>
            <div className={styles.editLogo}>
              <div className={styles.titleCell}>
                <MdStarRate
                  className={
                    model.status == ItemStatus.ACTIVE
                      ? styles.activeItem
                      : styles.inactiveItem
                  }
                />
                {isAdmin && (
                  <MdOutlineEditNote
                    onClick={() => handleClick(model)}
                    className={styles.pencil}
                  />
                )}
                {modelType == AdminModel.PROJECT && (
                  <Image
                    src={(model as Project).projectLogo}
                    width={15}
                    height={15}
                    alt={model.title ? model.title : "logo"}
                    style={{ objectFit: "contain" }}
                  />
                )}
                <h3>{model.title ? model.title : "<untitled>"}</h3>
              </div>
              {modelType == AdminModel.BLOG && (
                <div className={styles.dateCell}>
                  <h4>
                    {(model as Blog).publishDate
                      ? (model as Blog).publishDate
                      : "NO PUBLISH DATE"}
                  </h4>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContentList;
