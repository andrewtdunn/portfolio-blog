import { ReactNode, useContext, useState } from "react";
import styles from "./modal.module.scss";
import NavigationContext from "../../store/nav-context";
import { MdClear } from "react-icons/md";
import { albertusFont } from "../bio/bio-post";
import AuthContext from "../../store/auth-context";
import Fader from "../utils/fader";
import UserInfo from "../utils/user-info";
import { Project, Blog } from "@/models";
import ModalButtonGroup from "./modal-button-group";
import { AdminModel } from "../../type-definitions/enums";

const Modal = ({ children }: { children: ReactNode }) => {
  const [currentModel, setCurrentModel] = useState<Project | Blog | null>(null);
  const [formState, setFormState] = useState<"List" | "Create">("List");
  const navCtx = useContext(NavigationContext);
  const authCtx = useContext(AuthContext);
  const { closeModal, modalOpen } = navCtx;
  const { user } = authCtx!;

  let greeting = user ? (
    user.getUsername()
  ) : (
    <div>
      <p>Please Log In to use the admin section</p>
    </div>
  );
  if (user) {
    const { email, email_verified } = user.attributes;
  }

  const toggleFormType = (type: "List" | "Create") => {
    setFormState(type);
  };

  return (
    <div
      className={`
   ${styles.Modal} ${modalOpen && styles.show}`}
    >
      <div className={styles.tint} onClick={closeModal}></div>

      <div className={`${styles.modalInner} ${albertusFont.className}`}>
        <MdClear onClick={closeModal} className={styles.closeButton} />
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
