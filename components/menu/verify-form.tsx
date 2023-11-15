import { useContext, useEffect, useState } from "react";
import styles from "./verify-form.module.scss";
import AuthContext from "../../store/auth-context";
import { btnFont } from "./left-nav";

const VerifyForm = ({
  existingUsername,
  callback,
}: {
  existingUsername?: string;
  callback: () => void;
}) => {
  const authCtx = useContext(AuthContext);
  const [verify, setVerify] = useState("");
  const [username, setUsername] = useState(
    existingUsername ? existingUsername : ""
  );
  const { verifyErrors: errors } = authCtx!;
  const [touched, setTouched] = useState(false);

  const submitForm = async (e: Event) => {
    e.preventDefault();
    const response = await authCtx?.verify(username, verify);
    console.log("verify form", response);
    console.log("errors", errors);
    if (
      errors.general.length > 0 ||
      errors.username.length > 0 ||
      errors.verify.length > 0
    ) {
      // console.log("do not goback...");
      // console.log("response");
      setVerify("");
    } else {
      callback();
    }
  };

  return (
    <form autoComplete="off" className={styles.VerifyForm}>
      <h5 className={btnFont.className}>
        please check your email for a verification code from andrewtdunn.com
      </h5>
      <label className={btnFont.className} htmlFor="username">
        username:
      </label>
      <input
        className={!touched && errors.username.length > 0 ? styles.error : ""}
        id="username"
        name="username"
        type="text"
        placeholder={username ? username : "username"}
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
          setTouched(true);
        }}
        autoComplete="one-time-code"
      />
      {errors.username.length > 0 && (
        <ul className={styles.errorList}>
          {errors.username.map((error, index) => (
            <li className={`${styles.error} ${btnFont.className}`} key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <label className={btnFont.className} htmlFor="verify">
        verfication code:
      </label>
      <input
        className={!touched && errors.verify.length > 0 ? styles.error : ""}
        id="verify"
        name="verify"
        type="text"
        placeholder="######"
        value={verify}
        onChange={(event) => {
          setVerify(event.target.value);
          setTouched(true);
        }}
        autoComplete="one-time-code"
      />
      {errors.verify.length > 0 && (
        <ul className={styles.errorList}>
          {errors.verify.map((error, index) => (
            <li className={`${styles.error} ${btnFont.className}`} key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}

      <button
        className={`${btnFont.className}`}
        onClick={(e) => submitForm(e as unknown as Event)}
      >
        CONFIRM
      </button>
      {errors.general.length > 0 && (
        <ul className={styles.errorList}>
          {errors.general.map((error, index) => (
            <li className={`${styles.error} ${btnFont.className}`} key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default VerifyForm;
