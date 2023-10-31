import { Blog, Project } from "@/models";
import styles from "./modal-button-group.module.scss";

type ModalButtonGroupType = {
  modelType: "Blog" | "Project";
};

const ModalButtonGroup = ({ modelType }: ModalButtonGroupType) => {
  const listCallback = () => {
    console.log("listCallback");
  };
  const createCallback = () => {
    console.log("listCallback");
  };
  return (
    <div className={styles.ModalButtonGroup}>
      <h2>{modelType.toUpperCase()}</h2>
      <button onClick={listCallback}>{`List ${modelType}s`}</button>
      <button onClick={createCallback}>{`Create ${modelType}`}</button>
    </div>
  );
};

export default ModalButtonGroup;
