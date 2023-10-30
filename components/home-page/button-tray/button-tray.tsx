import { useContext } from "react";
import styles from "./button-tray.module.scss";
import ButtonTrayButton from "./button-tray-button";
import SlideshowContext from "../../../store/slideshow-context";

const ButtonTray = () => {
  let slideCtx = useContext(SlideshowContext);
  const { projects } = slideCtx!;
  return (
    <div className={styles.ButtonTray}>
      {projects &&
        projects.map((project: any) => {
          return <ButtonTrayButton project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ButtonTray;
