import { ItemStatus, Blog } from "@/models";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useCallback, useContext, useEffect, useState } from "react";
import { MdOutlineEditNote, MdStarRate, MdLink } from "react-icons/md";
import styles from "./admin-content-list.module.scss";
import ProjectUpdateForm from "@/ui-components/ProjectUpdateForm";
import { SoundContext } from "../../store/sound-context";
import AdminContext from "../../store/admin-context";
import Image from "next/image";
import { Pagination } from "@aws-amplify/ui-react";
import Link from "next/link";
import NavigationContext from "../../store/nav-context";
import BlogUpdateForm from "@/ui-components/BlogUpdateForm";

const PAGELIMIT: number = 9;

const AdminBlogsList = ({
  isAdmin,
}: {
  isAdmin: boolean;
  totalPages?: number;
}) => {
  const [models, setModels] = useState<Blog[] | []>([]);
  const [currModel, setCurrModel] = useState<Blog | null>(null);
  const [numPages, setNumPage] = useState<number>(0);
  const soundCtx = useContext(SoundContext);
  const adminCtx = useContext(AdminContext);
  const navCtx = useContext(NavigationContext);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const getPage = useCallback(async () => {
    console.log("getting page", currentPageIndex);
    const models = await DataStore.query(
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
        page: currentPageIndex,
        limit: PAGELIMIT,
      }
    );
    setModels(models);
  }, [currentPageIndex, searchTerm]);

  const handleToggleEditClick = (model: Blog) => {
    adminCtx?.setEditing(true);
    setCurrModel(model);
  };

  const resetForm = () => {
    soundCtx?.buttonNoise();
    adminCtx?.setEditing(false);
  };

  const handleNextPage = () => {
    // console.log("handleNextPage");
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const handlePreviousPage = () => {
    // console.log("handlePreviousPage");
    setCurrentPageIndex(currentPageIndex - 1);
  };

  const handleOnChange = (newPageIndex: any, prevPageIndex: any) => {
    // console.log(
    //   `handleOnChange \n - newPageIndex: ${newPageIndex} \n - prevPageIndex: ${prevPageIndex}`
    // );
    setCurrentPageIndex(newPageIndex - 1);
    getPage();
  };

  useEffect(() => {
    const getModels = async () => {
      // console.log("getModels ... ");
      //const models = await DataStore.query(Project);

      const models = await DataStore.query(Blog);
      // console.log("models", models);

      // console.log(`there are ${models.length} models`);
      setNumPage(Math.ceil(models.length / PAGELIMIT));
      //console.log(`there are ${numPages} pages`);
      getPage();
    };
    getModels();
  }, [setNumPage, getPage, numPages]);

  if (adminCtx?.editing && isAdmin && currModel) {
    return (
      <BlogUpdateForm
        blog={currModel!}
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
        <div>BLOGS LIST</div>
        <Pagination
          currentPage={currentPageIndex + 1}
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
                    onClick={() => handleToggleEditClick(model)}
                    className={styles.pencil}
                  />
                )}

                <Link
                  href={`/blog/${model.id}`}
                  key={index}
                  className={styles.link}
                  onClick={() => {
                    navCtx.closeModal();
                    navCtx.closeNav();
                  }}
                >
                  <MdLink className={styles.link} />
                </Link>
                {(model as Blog).image ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${(
                      model as Blog
                    ).image!}`}
                    width={45}
                    height={45}
                    alt={model.title ? model.title : "logo"}
                    style={{ objectFit: "contain" }}
                    className={styles.thumbHolder}
                  />
                ) : (
                  <div className={styles.thumbHolder}>no image</div>
                )}
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
                  {model.publishDate ? model.publishDate : "NO PUBLISH DATE"}
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminBlogsList;
