import { useContext } from "react";
import styles from "./debug-panel.module.scss";
import NavigationContext from "../../../store/nav-context";
import SlideshowContext from "../../../store/slideshow-context";
import { Project } from "@/models";

const DebugPanel = () => {
  const navigationCtx = useContext(NavigationContext);
  const slideCtx = useContext(SlideshowContext);
  const { currentIndex, prevIndex, projects, isFocused, secondaryIndex } =
    slideCtx!;

  let currProj: Project;
  if (projects && projects.length) {
    currProj = projects![currentIndex]!;
  }

  return (
    <div className={styles.DebugPanel}>
      <table>
        <tbody>
          <tr>
            <td>Total Slides:</td>
            <td>{projects?.length}</td>
          </tr>
          <tr>
            <td>Slide Index:</td>
            <td>{currentIndex}</td>
          </tr>
          <tr>
            <td>Prev Slide Index:</td>
            <td>{prevIndex}</td>
          </tr>
          <tr>
            <td>Left Open:</td>
            <td>{navigationCtx.leftOpen.toString()}</td>
          </tr>
          <tr>
            <td>Right Open:</td>
            <td>{navigationCtx.rightOpen.toString()}</td>
          </tr>
          <tr>
            <td>Modal Open:</td>
            <td>{navigationCtx.modalOpen.toString()}</td>
          </tr>

          <tr>
            <td>Focused:</td>
            <td>{isFocused.toString()}</td>
          </tr>
          {projects && projects?.length > 0 && (
            <>
              <tr>
                <td>Project:</td>
                <td>{currProj!.title.slice(0, 5)}</td>
              </tr>
              <tr>
                <td>Showcase:</td>
                <td>{currProj!.showcaseType}</td>
              </tr>
              <tr>
                <td># of Slides:</td>
                <td>
                  {currProj!.showcaseType == "SLIDE"
                    ? currProj!.slides!.length + 1
                    : "N/A"}
                </td>
              </tr>
            </>
          )}

          <tr>
            <td>Secondary Idx:</td>
            <td>{secondaryIndex}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DebugPanel;
