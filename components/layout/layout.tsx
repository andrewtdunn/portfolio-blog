import React, { useContext, useEffect } from "react";
import Logo from "./logo";
import MenuButton from "../menu/menu-button";
import styles from "./layout.module.scss";
import NavigationContext from "../../store/nav-context";
import LeftNav from "../menu/left-nav";
import RightNav from "../menu/right-nav";
import Nametag from "./nametag";
import VolumeButton from "./volume-button";
import NewSoundsLabel from "./new-sounds-label";
import { SoundContext } from "../../store/sound-context";
import Modal from "./modal";
//import BlogCreateForm from "@/ui-components/BlogCreateForm";
import ProjectCreateForm from "@/ui-components/ProjectCreateForm";
import AdminContext from "../../store/admin-context";
import BlogCreateForm from "@/ui-components/BlogCreateForm";
import { AdminForm, AdminModel } from "../../type-definitions/enums";
import AdminContentForm from "../admin/admin-content-form";
import PaintSplatter from "../utils/paint-splatter";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: Boolean;
}) {
  let navigationCtx = useContext(NavigationContext);
  let soundCtx = useContext(SoundContext);
  let adminCtx = useContext(AdminContext);

  if (home) {
    // console.log("home page");
  }
  const onMainClick = () => {
    if (navigationCtx.leftOpen || navigationCtx.rightOpen) {
      navigationCtx.closeNav();
    }
  };
  useEffect(() => {
    soundCtx?.loadVolumeUpSound();
  }, [soundCtx]);

  const showAlert = () => {
    console.log("success");
  };

  return (
    <div>
      <MenuButton align="left" />
      <MenuButton align="right" />
      <LeftNav />
      <RightNav />
      <VolumeButton home={home} />

      <NewSoundsLabel />
      <Modal>
        <AdminContentForm />
      </Modal>
      <main
        className={`${styles.main} ${
          navigationCtx.leftOpen && styles.leftOpen
        } ${navigationCtx.rightOpen && styles.rightOpen}`}
        onClick={onMainClick}
      >
        <Nametag home={home} />
        <div className={styles.inner}>{children}</div>
      </main>

      <Logo home={home} />
      {(navigationCtx.leftOpen || navigationCtx.rightOpen) && <PaintSplatter />}
    </div>
  );
}
