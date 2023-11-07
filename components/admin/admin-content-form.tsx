import { useContext } from "react";
import AdminContext from "../../store/admin-context";
import BlogCreateForm from "@/ui-components/BlogCreateForm";
import { AdminForm, AdminModel } from "../../type-definitions/enums";
import { SoundContext } from "../../store/sound-context";
import ProjectCreateForm from "@/ui-components/ProjectCreateForm";

import styles from "./admin-content-form.module.scss";
import ContentList from "./admin-content-list";
import AuthContext from "../../store/auth-context";
import StorageList from "./admin-storage-list";
import StorageForm from "./admin-storage-form";

const AdminContentForm = () => {
  const adminCtx = useContext(AdminContext);
  let soundCtx = useContext(SoundContext);
  const authCtx = useContext(AuthContext);
  const { user } = authCtx!;
  if (!user) {
    return null;
  }

  const session = user.getSignInUserSession();
  const token = session?.getAccessToken();

  const isAdmin =
    token?.payload["cognito:groups"] &&
    token?.payload["cognito:groups"].includes("admin").toString() == "true";

  return (
    <div className={styles.AdminContentForm}>
      {/* {isAdmin && (
        <h1>
          {adminCtx?.editing ? "UPDATE" : adminCtx?.formType}{" "}
          {adminCtx?.modelType}
        </h1>
      )} */}
      {adminCtx && isAdmin && adminCtx.formType == AdminForm.CREATE ? (
        adminCtx?.modelType == AdminModel.PROJECT ? (
          <ProjectCreateForm
            onSuccess={() => {
              soundCtx?.buttonNoise();
            }}
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
        ) : adminCtx.modelType == AdminModel.BLOG ? (
          <BlogCreateForm
            onSuccess={() => {
              soundCtx?.buttonNoise();
              adminCtx?.setFormType(AdminForm.LIST);
            }}
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
        ) : (
          <StorageForm />
        )
      ) : isAdmin && adminCtx?.modelType == AdminModel.STORAGE ? (
        <StorageList />
      ) : (
        <ContentList isAdmin={isAdmin} modelType={adminCtx?.modelType!} />
      )}
    </div>
  );
};

export default AdminContentForm;
