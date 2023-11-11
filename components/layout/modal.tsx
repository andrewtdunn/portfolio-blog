import { ReactNode, useContext, useState } from "react";
import styles from "./modal.module.scss";
import NavigationContext from "../../store/nav-context";
import { MdClear } from "react-icons/md";
import { albertusFont } from "../bio/bio-post";
import AuthContext from "../../store/auth-context";
import UserInfo from "../utils/user-info";
import ModalButtonGroup from "./modal-button-group";
import { AdminModel } from "../../type-definitions/enums";
import { SoundContext } from "../../store/sound-context";

const Modal = ({ children }: { children: ReactNode }) => {
  const soundCtx = useContext(SoundContext);
  const navCtx = useContext(NavigationContext);
  const authCtx = useContext(AuthContext);
  const { closeModal, modalOpen } = navCtx;
  const { user } = authCtx!;
  const { buttonNoise } = soundCtx!;

  const loginCTAClickHandler = () => {
    navCtx.closeModal();
    navCtx.openRightNav();
  };

  let greeting = user ? (
    user.getUsername()
  ) : (
    <div>
      <p>
        Please{" "}
        <span className={styles.loginCTA} onClick={loginCTAClickHandler}>
          Log In
        </span>{" "}
        to use the Admin section
      </p>
    </div>
  );

  return (
    <div
      className={`
   ${styles.Modal} ${modalOpen && styles.show}`}
    >
      <div className={styles.tint} onClick={closeModal}></div>

      <div className={`${styles.modalInner} ${albertusFont.className}`}>
        <MdClear
          onClick={() => {
            closeModal();
            buttonNoise(3);
          }}
          className={styles.closeButton}
        />
        <div className={styles.infoDiv}>
          <h1 className={styles.userName}>{greeting}</h1>
          {user && (
            <div className={styles.buttonGroup}>
              <UserInfo user={user} />
              <ModalButtonGroup modelType={AdminModel.PROJECT} />
              <ModalButtonGroup modelType={AdminModel.BLOG} />
            </div>
          )}
        </div>
        <div className={styles.formHolder}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
