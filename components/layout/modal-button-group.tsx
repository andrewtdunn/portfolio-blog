import { Blog, Project } from "@/models";
import styles from "./modal-button-group.module.scss";
import { useContext } from "react";
import AdminContext from "../../store/admin-context";
import { AdminModel } from "../../type-definitions/enums";

const ModalButtonGroup = ({ modelType }: { modelType: AdminModel }) => {
  const adminCtx = useContext(AdminContext);
  const listCallback = () => {
    console.log("listCallback");
    adminCtx?.setModelType(modelType);
    adminCtx?.setFormType("List");
    adminCtx?.setEditing(false);
  };
  const createCallback = () => {
    console.log("createCallback");
    adminCtx?.setModelType(modelType);
    adminCtx?.setFormType("Create");
    adminCtx?.setEditing(false);
  };
  return (
    <div className={styles.ModalButtonGroup}>
      <h2>{modelType.toString().toUpperCase()}</h2>
      <button onClick={listCallback}>{`List ${modelType}s`}</button>
      <button onClick={createCallback}>{`Create ${modelType}`}</button>
    </div>
  );
};

export default ModalButtonGroup;
