import { Blog, Project } from "@/models";
import styles from "./modal-button-group.module.scss";
import { useContext } from "react";
import AdminContext from "../../store/admin-context";
import { AdminForm, AdminModel } from "../../type-definitions/enums";
import { SoundContext } from "../../store/sound-context";
import AuthContext from "../../store/auth-context";

const ModalButtonGroup = ({ modelType }: { modelType: AdminModel }) => {
  const adminCtx = useContext(AdminContext);
  const soundCtx = useContext(SoundContext);
  const authCtx = useContext(AuthContext);

  const { buttonNoise } = soundCtx!;
  const { user } = authCtx!;
  if (!user) {
    return null;
  }

  const session = user.getSignInUserSession();
  const token = session?.getAccessToken();

  const isAdmin =
    token?.payload["cognito:groups"] &&
    token?.payload["cognito:groups"].includes("admin").toString() == "true";

  const listCallback = () => {
    adminCtx?.setModelType(modelType);
    adminCtx?.setFormType(AdminForm.LIST);
    adminCtx?.setEditing(false);
  };
  const createCallback = () => {
    adminCtx?.setModelType(modelType);
    adminCtx?.setFormType(AdminForm.CREATE);
    adminCtx?.setEditing(false);
  };
  return (
    <div className={styles.ModalButtonGroup}>
      <h2>{modelType.toString().toUpperCase()}</h2>
      <button
        onClick={() => {
          listCallback();
          buttonNoise(1);
        }}
      >{`List ${modelType}s`}</button>
      {isAdmin && (
        <button
          onClick={() => {
            createCallback();
            buttonNoise(2);
          }}
        >{`Create ${modelType}`}</button>
      )}
    </div>
  );
};

export default ModalButtonGroup;
