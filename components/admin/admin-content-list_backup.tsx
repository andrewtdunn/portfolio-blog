import { useContext } from "react";
import styles from "./admin-content-list.module.scss";
import AdminContext from "../../store/admin-context";
import { AdminModel } from "../../type-definitions/enums";
import AdminProjectList from "./admin-projects-list";

const AdminContentList = ({ isAdmin }: { isAdmin: boolean }) => {
  const adminCtx = useContext(AdminContext);
  return (
    <div className={styles.AdminContentList}>
      {adminCtx?.modelType == AdminModel.BLOG && <h1>Blogs List</h1>}
      {adminCtx?.modelType == AdminModel.PROJECT && (
        <AdminProjectList isAdmin={isAdmin} />
      )}
    </div>
  );
};

export default AdminContentList;
