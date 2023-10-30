import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import AuthContext, { CognitoUserExt } from "../../store/auth-context";
import styles from "./signup-form.module.scss";
import { btnFont } from "./left-nav";
import { SoundContext } from "../../store/sound-context";

export type SignUpFormTypes = {
  callback: (
    user: CognitoUserExt,
    userConfirmed: boolean,
    username: string
  ) => void;
};

const SignUpForm = ({ callback }: SignUpFormTypes) => {
  const authContext = useContext(AuthContext);
  const soundCtx = useContext(SoundContext);
  const { signUpErrors: errors } = authContext!;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const submitForm = async (e: Event) => {
    e.preventDefault();
    setSubmitted(true);
    soundCtx?.buttonNoise(1);
    let response: any = await authContext?.signUp(username, password, email);
    setSubmitted(false);
    setTouched(false);
    if (response && response!.user) {
      // clear form and redirect to confirm
      console.log("user in sign up form", response!.user);
      console.log(response);
      callback(
        response!.user,
        response!.userConfirmed,
        response!.user.username
      );
      clearForm();
    } else {
      console.log("error", response);
    }
  };

  useEffect(() => {
    if (
      errors.password.length > 0 ||
      errors.username.length > 0 ||
      errors.email.length > 0 ||
      errors.nonFieldErrors.length > 0
    ) {
      setSubmitted(false);
    }
  }, [errors]);

  return (
    <form autoComplete="off" className={styles.SignUpForm}>
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
      <label className={btnFont.className} htmlFor="email">
        email:
      </label>
      <input
        className={!touched && errors.email.length > 0 ? styles.error : ""}
        id="email"
        name="email"
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setTouched(true);
        }}
        autoComplete="one-time-code"
      />
      {errors.email.length > 0 && (
        <ul className={styles.errorList}>
          {errors.email.map((error, index) => (
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
        className={btnFont.className}
        onClick={(e) => submitForm(e as unknown as Event)}
        disabled={touched && submitted}
      >
        {" "}
        Sign Up{" "}
      </button>

      {errors.nonFieldErrors.length > 0 && (
        <ul className={styles.errorList}>
          {errors.nonFieldErrors.map((error, index) => (
            <li className={`${styles.error} ${btnFont.className}`} key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SignUpForm;
