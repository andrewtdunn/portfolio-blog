import { CognitoUserExt } from "../../store/auth-context";
import styles from "./user-info.module.scss";

import { FaRebel, FaCheck } from "react-icons/fa";

const UserInfo = ({ user }: { user: CognitoUserExt }) => {
  const { email, email_verified } = user.attributes;
  const session = user.getSignInUserSession();
  const token = session?.getAccessToken();

  const isAdmin =
    token?.payload["cognito:groups"] &&
    token?.payload["cognito:groups"].includes("admin").toString() == "true";

  //console.log(session?.getAccessToken().payload["cognito:groups"]);
  return (
    <div className={styles.UserInfo}>
      <p>{email}</p>
      {email_verified.toString() && (
        <p className={styles.badgeIcon}>
          <FaCheck className={styles.icon} />
          Verified
        </p>
      )}
      {isAdmin && (
        <p className={styles.badgeIcon}>
          <FaRebel className={styles.icon} />
          Admin
        </p>
      )}
    </div>
  );
};

export default UserInfo;
