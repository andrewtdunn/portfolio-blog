import { useContext } from "react";
import styles from "./paint-spaltter.module.scss";
import NavigationContext from "../../store/nav-context";

const PaintSplatter = () => {
  const navContext = useContext(NavigationContext);
  const { rightOpen } = navContext;

  console.log("rightOpen", rightOpen);
  return (
    <div
      className={`${styles.PaintSplatter} ${
        rightOpen ? styles.rightOpen : styles.leftOpen
      }`}
    >
      <div className={styles.pink_splatter} />
      <div className={styles.green_splatter} />
      <div className={styles.blue_splatter} />
      <div className={styles.pink_splatter2} />
      <div className={styles.green_splatter2} />
      <div className={styles.blue_splatter2} />
    </div>
  );
};

export default PaintSplatter;
