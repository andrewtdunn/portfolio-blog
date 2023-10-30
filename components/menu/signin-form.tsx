import { useContext, useEffect, useState } from "react";
import styles from "./signin-form.module.scss";
import AuthContext from "../../store/auth-context";
import { btnFont } from "./left-nav";
import { SoundContext } from "../../store/sound-context";

const SignInForm = () => {
  const authCtx = useContext(AuthContext);
  const soundCtx = useContext(SoundContext);
  const { signInErrors: errors } = authCtx!;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const submitForm = (e: Event) => {
    e.preventDefault();
    authCtx!.signIn(username, password);
    soundCtx?.buttonNoise(5);
    setSubmitted(true);
    setTouched(false);
  };

  useEffect(() => {
    if (
      errors.password.length > 0 ||
      errors.username.length > 0 ||
      errors.general.length > 0
    ) {
      setSubmitted(false);
    }
  }, [errors]);

  return (
    <form autoComplete="off" className={styles.SignInForm}>
      <label className={btnFont.className} htmlFor="username">
        username:
      </label>
      <input
        className={!touched && errors.username.length > 0 ? styles.error : ""}
        id="username"
        name="username"
        type="text"
        placeholder="username"
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
      <label className={btnFont.className} htmlFor="password">
        password:
      </label>
      <input
        className={!touched && errors.password.length > 0 ? styles.error : ""}
        id="password"
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          setTouched(true);
        }}
        autoComplete="one-time-code"
      />
      {errors.password.length > 0 && (
        <ul className={styles.errorList}>
          {errors.password.map((error, index) => (
            <li className={`${styles.error} ${btnFont.className}`} key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={(e) => submitForm(e as unknown as Event)}
        className={btnFont.className}
        disabled={submitted}
      >
        {" "}
        Sign In{" "}
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

export default SignInForm;
