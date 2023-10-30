import styles from "./auth-form.module.scss";
import SignInForm from "./signin-form";
import AuthContext, { CognitoUserExt } from "../../store/auth-context";
import { useCallback, useContext, useEffect, useState } from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { tapeFont } from "../layout/nametag";
import { btnFont } from "./left-nav";
import SignUpForm from "./signup-form";
import VerifyForm from "./verify-form";
import { SoundContext } from "../../store/sound-context";
import { AuthContextType } from "../../@types/auth";

const AuthForm = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const authCtx: AuthContextType | null = useContext(AuthContext);
  const soundCtx = useContext(SoundContext);
  const [username, setUsername] = useState<string>("");
  const [signedIn, setSignedIn] = useState(false);

  const newUserCallback = (
    user: CognitoUserExt,
    confirmed: boolean,
    username: string
  ) => {
    setShowVerify(!confirmed);
    setUsername(username);
  };

  const handleVerify = async () => {
    setShowVerify(false);
    const user = await fetchUser();
    //console.log("handleVerify user", user);
    setShowSignUp(false);
  };

  const handleSignOut = async () => {
    try {
      await authCtx?.signOut();
      soundCtx?.buttonNoise(4);
      setUsername("");
      setSignedIn(false);
      // Redirect or perform any other actions after sign out
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleShowSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowVerify(false);
    soundCtx?.buttonNoise(2);
  };

  const toggleShowVerify = () => {
    setShowVerify(!showVerify);
    soundCtx?.buttonNoise(3);
  };

  const { getUser } = authCtx!;

  const fetchUser = useCallback(async () => {
    try {
      let currUserResponse: any = await getUser();
      //console.log("currUser", currUserResponse);
      // setUser(user);
      // setUserConfirmed(currUserResponse.userConfirmed as any);
      // console.log("authform", user);
      // console.log("authform", userConfirmed.toString());

      if (
        typeof currUserResponse == "object" &&
        currUserResponse.signInUserSession
      ) {
        let currUser = currUserResponse as CognitoUser;
        let userName = await currUser.getUsername();
        setUsername(userName);
        setSignedIn(true);
      } else {
        console.log("user not detected");
      }
      return currUserResponse;
    } catch (e: any) {
      console.log("auto login attempt", e);
      return e;
    }
  }, [getUser]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (!signedIn) {
    return (
      <div className={styles.AuthForm}>
        {/* <div>Google Login Here</div>
            <hr /> */}

        {showVerify ? (
          <VerifyForm
            existingUsername={username ? username : ""}
            callback={handleVerify}
          />
        ) : showSignUp ? (
          <SignUpForm callback={newUserCallback} />
        ) : (
          <SignInForm />
        )}

        <hr />
        <button
          className={`${btnFont.className} && ${styles.secondary}`}
          onClick={toggleShowSignUp}
        >
          {showSignUp ? "Sign In" : "Sign Up"}
        </button>
        {!showVerify && (
          <button
            className={`${btnFont.className} && ${styles.secondary}`}
            onClick={toggleShowVerify}
          >
            Confirm
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      {signedIn && (
        <div className={styles.nameText}>
          <h1 className={`${tapeFont.className} ${styles.nametag}`}>
            {` ${username} `}
          </h1>
        </div>
      )}
      <div className={styles.AuthForm}>
        <button
          className={`${btnFont.className} ${styles.secondary}`}
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default AuthForm;
