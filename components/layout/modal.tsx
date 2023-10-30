import { ReactNode, useContext } from "react";
import styles from "./modal.module.scss";
import NavigationContext from "../../store/nav-context";
import { MdClear } from "react-icons/md";
import { albertusFont } from "../bio/bio-post";
import AuthContext from "../../store/auth-context";
import Fader from "../utils/fader";
import UserInfo from "../utils/user-info";

const Modal = ({ children }: { children: ReactNode }) => {
  const navCtx = useContext(NavigationContext);
  const authCtx = useContext(AuthContext);
  const { closeModal, modalOpen } = navCtx;
  const { user } = authCtx!;

  let greeting = user ? user.getUsername() : "Not Logged In";
  if (user) {
    const { email, email_verified } = user.attributes;
  }

  return (
    <div
      className={`
   ${styles.Modal} ${modalOpen && styles.show}`}
    >
      <div className={styles.tint} onClick={closeModal}></div>

      <div className={`${styles.modalInner} ${albertusFont.className}`}>
        <MdClear onClick={closeModal} className={styles.closeButton} />
        <div className={styles.infoDiv}>
          <h1>{greeting}</h1>
          {user && <UserInfo user={user} />}
        </div>
        <div className={styles.formHolder}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
