import styles from "./menu-button.module.scss";
import NavigationContext from "../../store/nav-context";
import { useContext } from "react";
import { SoundContext } from "../../store/sound-context";

const MenuButton = ({ align }: { align: string }) => {
  const soundCtx = useContext(SoundContext);
  const navigationCtx = useContext(NavigationContext);
  const clickHandler = () => {
    navigationCtx.closeNav();
    if (align == "right" && !navigationCtx.rightOpen) {
      navigationCtx.openRightNav();
    } else if (align == "left" && !navigationCtx.leftOpen) {
      navigationCtx.openLeftNav();
    }
    soundCtx?.openDoor();
  };
  let isOpen = false;
  if (
    (align === "right" && navigationCtx.rightOpen) ||
    (align === "left" && navigationCtx.leftOpen)
  ) {
    isOpen = true;
  }
  return (
    <div
      onClick={clickHandler}
      className={`${styles.MenuButton} ${styles[align]} ${
        isOpen && styles.open
      }`}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default MenuButton;
