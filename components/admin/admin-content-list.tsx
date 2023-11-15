import { Blog, ItemStatus, Project } from "@/models";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { GetServerSideProps } from "next";
import { AdminForm, AdminModel } from "../../type-definitions/enums";
import { useCallback, useContext, useEffect, useState } from "react";
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
import AdminProjectList from "./admin-projects-list";

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

  const getPage = useCallback(async () => {
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
  }, [currentPageIndex, searchTerm, modelType]);

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
    //console.log("handleNextPage");
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const handlePreviousPage = () => {
    //console.log("handlePreviousPage");
    setCurrentPageIndex(currentPageIndex - 1);
  };

  const handleOnChange = (newPageIndex: any, prevPageIndex: any) => {
    //console.log(
    //   `handleOnChange \n - newPageIndex: ${newPageIndex} \n - prevPageIndex: ${prevPageIndex}`
    // );
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
        //setModels(blogs);
        getPage();
      }
    };
    if (!adminCtx?.editing) {
      getModels();
    }
  }, [modelType, adminCtx, currentPageIndex, searchTerm, getPage]);

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

  return (
    <>
      {adminCtx?.modelType == AdminModel.PROJECT && (
        <>
          {adminCtx?.formType == AdminForm.CREATE && <p>Project Create</p>}
          {adminCtx?.formType == AdminForm.LIST && <p>Project List</p>}
          {adminCtx?.formType == AdminForm.UPDATE && <p>Project Update</p>}
        </>
      )}
    </>
  );
};

export default ContentList;
