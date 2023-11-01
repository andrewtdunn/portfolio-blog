import { useContext } from "react";
import AdminContext from "../../store/admin-context";
import BlogCreateForm from "@/ui-components/BlogCreateForm";
import { AdminForm, AdminModel } from "../../type-definitions/enums";
import { SoundContext } from "../../store/sound-context";
import ProjectCreateForm from "@/ui-components/ProjectCreateForm";

import styles from "./admin-content-form.module.scss";
import ContentList from "./admin-content-list";

const AdminContentForm = () => {
  const adminCtx = useContext(AdminContext);
  let soundCtx = useContext(SoundContext);

  return (
    <div className={styles.AdminContentForm}>
      <h1>
        {adminCtx?.editing ? "UPDATE" : adminCtx?.formType}{" "}
        {adminCtx?.modelType}
      </h1>
      {adminCtx && adminCtx.formType == AdminForm.CREATE ? (
        adminCtx?.modelType == AdminModel.PROJECT ? (
          <ProjectCreateForm
            onSuccess={() => {
              soundCtx?.buttonNoise();
            }}
          />
        ) : (
          <BlogCreateForm
            onSuccess={() => {
              soundCtx?.buttonNoise();
            }}
          />
        )
      ) : (
        <ContentList modelType={adminCtx?.modelType!} />
      )}
    </div>
  );
};

export default AdminContentForm;
