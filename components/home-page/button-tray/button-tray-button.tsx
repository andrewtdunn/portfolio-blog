import { FC, useContext } from "react";
import styles from "./button-tray-button.module.scss";
import Image from "next/image";
import { Project } from "@/models";
import SlideshowContext from "../../../store/slideshow-context";
import { SoundContext } from "../../../store/sound-context";

type ButtonTrayButtonProps = {
  project: Project;
};

const ButtonTrayButton: FC<ButtonTrayButtonProps> = ({
  project,
}: ButtonTrayButtonProps) => {
  const slideCtx = useContext(SlideshowContext);
  const soundCtx = useContext(SoundContext);
  const { isFocused, projects, currentIndex, focus } = slideCtx!;

  if (!projects) return null;
  let currProject = projects[currentIndex];
  const isCurrent = currProject.id == project.id;

  const clickHandler = (projectId: string) => {
    let index: number;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id == projectId) {
        index = i;
      }
    }

    if (!isFocused) {
      soundCtx?.playBridgeSound();
      soundCtx?.playPowerDownSound();
    }
    focus(index!);
  };

  return (
    <button
      className={`${styles.ButtonTrayButton} ${isCurrent && styles.lit}`}
      onClick={() => clickHandler(project.id)}
      key={project.id}
    >
      <div
        className={`${styles.statusLight} ${isCurrent && styles.lit} ${
          isCurrent && isFocused && styles.blink
        }`}
      ></div>
      <Image
        className={styles.logoImg}
        src={project.projectLogo!}
        alt={project.title}
        width={50}
        height={50}
        priority
      />
    </button>
  );
};

export default ButtonTrayButton;
