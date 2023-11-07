import { Blog, ItemStatus, Project } from "@/models";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { GetServerSideProps } from "next";
import { AdminModel } from "../../type-definitions/enums";
import { useContext, useEffect, useState } from "react";
import { MdOutlineEditNote, MdStarRate, MdLink } from "react-icons/md";
import styles from "./admin-content-list.module.scss";
import ProjectUpdateForm from "@/ui-components/ProjectUpdateForm";
import BlogUpdateForm from "@/ui-components/BlogUpdateForm";
import { SoundContext } from "../../store/sound-context";
import AdminContext from "../../store/admin-context";
import Image from "next/image";
import { Pagination, usePagination } from "@aws-amplify/ui-react";
import { modelWorldMatrix } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import NavigationContext from "../../store/nav-context";

const PAGELIMIT: number = 9;

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
  const [numPages, setNumPage] = useState<number>(10);
  const soundCtx = useContext(SoundContext);
  const adminCtx = useContext(AdminContext);
  const navCtx = useContext(NavigationContext);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredModels, setFileteredModels] = useState(models);

  const getPage = async () => {
    if (searchTerm) {
      return;
    }
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
        const blogs = await DataStore.query(
          Blog,
          searchTerm
            ? (c) =>
                c.or((c) => [
                  c.title.contains(searchTerm),
                  c.text.contains(searchTerm),
                ])
            : Predicates.ALL,
          {
            sort: (s) => s.publishDate(SortDirection.DESCENDING),
            page: currentPageIndex - 1,
            limit: PAGELIMIT,
          }
        );
        // const blogs = await DataStore.query(Blog, Predicates.ALL, {
        //   sort: (s) => s.publishDate(SortDirection.DESCENDING),
        // });
        setModels(blogs);
      }
    };
    if (!adminCtx?.editing) {
      getModels();
    }
  }, [modelType, adminCtx, currentPageIndex, searchTerm]);

  useEffect(() => {
    const getNumberOfPages = async () => {
      let models;
      if (modelType == AdminModel.BLOG) {
        models = await DataStore.query(Blog);
      } else {
        models = await DataStore.query(Project);
      }
      setNumPage(Math.ceil(models.length / PAGELIMIT));
    };

    getNumberOfPages();
  }, [modelType]);

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

  const gotoLink = (id: string) => {
    console.log("gotoLink", id);
  };

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };
  return (
    <>
      <div className={styles.listAdmin}>
        <div>{modelType}s</div>
        <Pagination
          currentPage={currentPageIndex}
          totalPages={numPages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={handleOnChange}
          className={searchTerm && styles.hiddenPagination}
        />
        <div className={styles.searchForm}>
          <input value={searchTerm} onChange={handleSearchChange} />
          <button
            onClick={() => {
              setSearchTerm("");
            }}
          >
            clear
          </button>
        </div>
      </div>

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

                <Link
                  href={`${modelType == AdminModel.PROJECT ? "/" : "/blog"}/${
                    model.id
                  }`}
                  key={index}
                  className={styles.link}
                  onClick={() => {
                    navCtx.closeModal();
                    navCtx.closeNav();
                  }}
                >
                  <MdLink className={styles.link} />
                </Link>
                {modelType == AdminModel.PROJECT && (
                  <Image
                    src={(model as Project).projectLogo}
                    width={15}
                    height={15}
                    alt={model.title ? model.title : "logo"}
                    style={{ objectFit: "contain" }}
                  />
                )}
                {modelType == AdminModel.BLOG &&
                  ((model as Blog).image ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${(
                        model as Blog
                      ).image!}`}
                      width={40}
                      height={40}
                      alt={model.title ? model.title : "logo"}
                      style={{
                        objectFit: "contain",
                        backgroundColor: "rgb(200,200,200)",
                        border: "1px solid rgb(100,100, 100)",
                      }}
                    />
                  ) : (
                    <div className={styles.thumbHolder}>NO IMAGE</div>
                  ))}
                <h3>
                  {model.title ? (
                    model.title
                  ) : (
                    <span className={styles.untitled}>untitled</span>
                  )}
                </h3>
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
