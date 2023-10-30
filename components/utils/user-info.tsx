import { CognitoUserExt } from "../../store/auth-context";
import styles from "./user-info.module.scss";

const UserInfo = ({ user }: { user: CognitoUserExt }) => {
  const { email, email_verified } = user.attributes;
  const session = user.getSignInUserSession();
  const token = session?.getAccessToken();

  //console.log(session?.getAccessToken().payload["cognito:groups"]);
  return (
    <div className={styles.UserInfo}>
      <p>Email: {email}</p>
      <p>Verified: {email_verified.toString()}</p>
      <p>
        Admin:{" "}
        {token?.payload["cognito:groups"] &&
        token?.payload["cognito:groups"].includes("admin").toString() == "true"
          ? "true"
          : "false"}
      </p>
    </div>
  );
};

export default UserInfo;
