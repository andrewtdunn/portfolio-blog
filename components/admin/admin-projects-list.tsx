import { Blog, ItemStatus, Project } from "@/models";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { AdminModel } from "../../type-definitions/enums";
import { useContext, useEffect, useState } from "react";
import { MdOutlineEditNote, MdStarRate, MdLink } from "react-icons/md";
import styles from "./admin-content-list.module.scss";
import ProjectUpdateForm from "@/ui-components/ProjectUpdateForm";
import { SoundContext } from "../../store/sound-context";
import AdminContext from "../../store/admin-context";
import Image from "next/image";
import { Pagination, usePagination } from "@aws-amplify/ui-react";
import { modelWorldMatrix } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import NavigationContext from "../../store/nav-context";

const PAGELIMIT: number = 9;

const AdminProjectList = ({
  isAdmin,
}: {
  isAdmin: boolean;
  totalPages?: number;
}) => {
  const [models, setModels] = useState<Blog[] | Project[] | []>([]);
  const [currModel, setCurrModel] = useState<Project | null>(null);
  const [numPages, setNumPage] = useState<number>(10);
  const soundCtx = useContext(SoundContext);
  const adminCtx = useContext(AdminContext);
  const navCtx = useContext(NavigationContext);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const getPage = async () => {
    const models = await DataStore.query(Blog, Predicates.ALL, {
      sort: (s) => s.publishDate(SortDirection.DESCENDING),
      page: currentPageIndex - 1,
      limit: PAGELIMIT,
    });
    setModels(models);
  };

  const handleToggleEditClick = (model: Project) => {
    adminCtx?.setEditing(true);
    setCurrModel(model);
  };

  const resetForm = () => {
    soundCtx?.buttonNoise();
    adminCtx?.setEditing(false);
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
    setNumPage(Math.ceil(models.length / PAGELIMIT));
    getPage();
  };

  useEffect(() => {
    const getModels = async () => {
      const projects = await DataStore.query(Project);
      setModels(projects);
      setNumPage(Math.ceil(projects.length / PAGELIMIT));
    };
    if (!adminCtx?.editing) {
      getModels();
    }
  }, [adminCtx, currentPageIndex, searchTerm, setNumPage]);

  if (adminCtx?.editing && isAdmin && currModel) {
    return (
      <ProjectUpdateForm
        project={currModel!}
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

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };
  return (
    <>
      <div className={styles.listAdmin}>
        <div>Projects</div>
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
                    onClick={() => handleToggleEditClick(model as Project)}
                    className={styles.pencil}
                  />
                )}

                <Link
                  href={`/${model.id}`}
                  key={index}
                  className={styles.link}
                  onClick={() => {
                    navCtx.closeModal();
                    navCtx.closeNav();
                  }}
                >
                  <MdLink className={styles.link} />
                </Link>
                <Image
                  src={(model as Project).projectLogo}
                  width={15}
                  height={15}
                  alt={model.title ? model.title : "logo"}
                  style={{ objectFit: "contain" }}
                />
                <h3>
                  {model.title ? (
                    model.title
                  ) : (
                    <span className={styles.untitled}>untitled</span>
                  )}
                </h3>
              </div>
              <div className={styles.dateCell}>
                <h4>
                  {(model as Blog).publishDate
                    ? (model as Blog).publishDate
                    : "NO PUBLISH DATE"}
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminProjectList;
