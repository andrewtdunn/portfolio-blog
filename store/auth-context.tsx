import { Auth } from "aws-amplify";
import { ReactNode, createContext, useReducer, useState } from "react";
import { AuthContextType } from "../@types/auth";
import { CognitoUser } from "@aws-amplify/auth";

const AuthContext = createContext<AuthContextType | null>(null);

/*
 * The following interface extends the CognitoUser type because it has issues
 * (see github.com/aws-amplify/amplify-js/issues/4927). Eventually (when you
 * no longer get an error accessing a CognitoUser's 'attribute' property) you
 * will be able to use the CognitoUser type instead of CognitoUserExt.
 */

export interface UserAttributes {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  updated_at: string;
  "custom:bytesQuota": string;
  "custom:bytesUsed": string;
}

export interface CognitoUserExt extends CognitoUser {
  attributes: UserAttributes;
}

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function isHTML(str: string) {
  var a = document.createElement("div");
  a.innerHTML = str;

  for (var c = a.childNodes, i = c.length; i--; ) {
    if (c[i].nodeType == 1) return true;
  }

  return false;
}

enum SignupActionKind {
  ADD_USERNAME_ERROR = "ADD_USERNAME_ERROR",
  ADD_EMAIL_ERROR = "ADD_EMAIL_ERROR",
  ADD_PASSWORD_ERROR = "ADD_PASSWORD_ERROR",
  ADD_GENERAL_ERROR = "ADD_GENERAL_ERROR",
  RESET = "RESET",
}

enum SignInActionKind {
  ADD_USERNAME_ERROR = "ADD_USERNAME_ERROR",
  ADD_PASSWORD_ERROR = "ADD_PASSWORD_ERROR",
  ADD_GENERAL_ERROR = "ADD_GENERAL_ERROR",
  RESET = "RESET",
}

enum VerifyActionKind {
  ADD_USERNAME_ERROR = "ADD_USERNAME_ERROR",
  ADD_VERIFY_ERROR = "ADD_VERIFY_ERROR",
  ADD_GENERAL_ERROR = "ADD_GENERAL_ERROR",
  RESET = "RESET",
}

interface SignupErrorAction {
  type: SignupActionKind;
  payload: object;
}

interface SignInErrorAction {
  type: SignInActionKind;
  payload: object;
}

interface VerifyErrorAction {
  type: VerifyActionKind;
  payload: object;
}

interface SignUpState {
  password: string[];
  email: string[];
  username: string[];
  nonFieldErrors: string[];
}

interface SignInState {
  username: string[];
  password: string[];
  general: string[];
}

interface VerifyState {
  username: string[];
  verify: string[];
  general: string[];
}

const verifyReducer = (state: VerifyState, action: VerifyErrorAction) => {
  const { type, payload } = action;
  switch (type) {
    case VerifyActionKind.RESET:
      return initialVerifyState;
    case VerifyActionKind.ADD_VERIFY_ERROR:
      return {
        ...state,
        verify: payload as string[],
      };
    case VerifyActionKind.ADD_USERNAME_ERROR:
      return {
        ...state,
        username: payload as string[],
      };

    case VerifyActionKind.ADD_GENERAL_ERROR:
      return {
        ...state,
        general: payload as string[],
      };

    default:
      return state;
  }
};

const signUpReducer = (state: SignUpState, action: SignupErrorAction) => {
  const { type, payload } = action;
  switch (type) {
    case SignupActionKind.RESET:
      return initialSignUpState;
    case SignupActionKind.ADD_EMAIL_ERROR:
      return {
        ...state,
        email: payload as string[],
      };
    case SignupActionKind.ADD_PASSWORD_ERROR:
      return {
        ...state,
        password: payload as string[],
      };
    case SignupActionKind.ADD_USERNAME_ERROR:
      return {
        ...state,
        username: payload as string[],
      };

    case SignupActionKind.ADD_GENERAL_ERROR:
      return {
        ...state,
        nonFieldErrors: payload as string[],
      };

    default:
      return state;
  }
};

const signInReducer = (state: SignInState, action: SignInErrorAction) => {
  const { type, payload } = action;
  switch (type) {
    case SignInActionKind.RESET:
      return initialSignInState;
    case SignInActionKind.ADD_USERNAME_ERROR:
      return {
        ...state,
        username: payload as string[],
      };
    case SignInActionKind.ADD_PASSWORD_ERROR:
      return {
        ...state,
        password: payload as string[],
      };
    case SignInActionKind.ADD_GENERAL_ERROR:
      return {
        ...state,
        general: payload as string[],
      };
    default:
      return state;
  }
};

const initialSignUpState: SignUpState = {
  password: [],
  email: [],
  username: [],
  nonFieldErrors: [],
};

const initialSignInState: SignInState = {
  username: [],
  password: [],
  general: [],
};

const initialVerifyState: VerifyState = {
  username: [],
  verify: [],
  general: [],
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<CognitoUserExt | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [pendingEmailVerified, setPendingEmailVerified] =
    useState<boolean>(false);

  const [signUpErrors, dispatchSignUpError] = useReducer(
    signUpReducer,
    initialSignUpState
  );

  const [signInErrors, dispatchSignInError] = useReducer(
    signInReducer,
    initialSignInState
  );

  const [verifyErrors, dispatchVerifyError] = useReducer(
    verifyReducer,
    initialVerifyState
  );

  const resetSignUpErrors = () => {
    dispatchSignUpError({
      type: SignupActionKind.RESET,
      payload: null as any,
    });
  };

  const resetSignInErrors = () => {
    dispatchSignInError({
      type: SignInActionKind.RESET,
      payload: null as any,
    });
  };

  const resetVerifyErrors = () => {
    dispatchVerifyError({
      type: VerifyActionKind.RESET,
      payload: null as any,
    });
  };

  const signIn: any = async (username: string, password: string) => {
    try {
      resetSignInErrors();
      if (!username) {
        dispatchSignInError({
          type: SignInActionKind.ADD_USERNAME_ERROR,
          payload: ["username cannot be empty"],
        });
        return;
      }
      if (!password) {
        dispatchSignInError({
          type: SignInActionKind.ADD_PASSWORD_ERROR,
          payload: ["password cannot be empty"],
        });
        return;
      }
      if (isHTML(username)) {
        dispatchSignInError({
          type: SignInActionKind.ADD_USERNAME_ERROR,
          payload: ["username cannot contain html"],
        });
        return;
      }
      if (isHTML(password)) {
        dispatchSignInError({
          type: SignInActionKind.ADD_PASSWORD_ERROR,
          payload: ["password cannot contain html"],
        });
        return;
      }
      await Auth.signIn(username, password).then((user) => {
        setUser(user);
        setUsername(user.username);
      });
    } catch (error: any) {
      console.log("error signing in", error);
      console.log("error message", error.message);
      let message = error.message;
      let errorString = JSON.stringify(error).toLowerCase();
      let messageType: SignInActionKind;
      if (errorString.includes("user")) {
        messageType = SignInActionKind.ADD_USERNAME_ERROR;
      } else if (errorString.includes("password")) {
        messageType = SignInActionKind.ADD_PASSWORD_ERROR;
      } else {
        messageType = SignInActionKind.ADD_GENERAL_ERROR;
      }

      dispatchSignInError({
        type: messageType,
        payload: [message],
      });
    }
  };

  const verify: any = async (username: string, verifyCode: string) => {
    try {
      resetVerifyErrors();
      if (!username) {
        dispatchVerifyError({
          type: VerifyActionKind.ADD_USERNAME_ERROR,
          payload: ["username cannot be empty"],
        });
        return;
      }
      if (!verifyCode) {
        dispatchVerifyError({
          type: VerifyActionKind.ADD_VERIFY_ERROR,
          payload: ["verification code cannot be empty"],
        });
        return;
      }
      if (isHTML(username)) {
        dispatchVerifyError({
          type: VerifyActionKind.ADD_USERNAME_ERROR,
          payload: ["username cannot contain html"],
        });
        return;
      }
      if (isHTML(verifyCode)) {
        dispatchVerifyError({
          type: VerifyActionKind.ADD_VERIFY_ERROR,
          payload: ["verification code cannot contain html"],
        });
        return;
      }
      const response = await Auth.confirmSignUp(username, verifyCode);
      console.log("autn ctx", response);
      return response;
    } catch (error: any) {
      console.log("error verifying", error!.name!);
      let message = error.message;
      if (message.includes(":")) {
        var n = message.lastIndexOf(":");
        var result = message.substring(n + 1);
        message = result;
      }
      let errorString = JSON.stringify(error).toLowerCase();
      let messageType: VerifyActionKind;
      if (errorString.includes("username")) {
        messageType = VerifyActionKind.ADD_USERNAME_ERROR;
      } else if (errorString.includes("verification")) {
        messageType = VerifyActionKind.ADD_VERIFY_ERROR;
      } else {
        messageType = VerifyActionKind.ADD_GENERAL_ERROR;
      }

      dispatchVerifyError({
        type: messageType,
        payload: [message],
      });
    }
  };

  const getUser: any = async () => {
    // call auth api and set username, image
    try {
      const response = await Auth.currentAuthenticatedUser();
      //console.log(response);
      setUser(response);
      //setUsername(currentUser.username);
      //console.log("attributes", attriubutes);
      return response;
    } catch (e: any) {
      //console.log(e);
      return e;
    }
  };

  const signOut: any = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const signUp: any = async (
    username: string,
    password: string,
    email: string
  ) => {
    resetSignUpErrors();
    if (password.length <= 1) {
      dispatchSignUpError({
        type: SignupActionKind.ADD_PASSWORD_ERROR,
        payload: ["password not long enough"],
      });
      return;
    }
    if (!email) {
      dispatchSignUpError({
        type: SignupActionKind.ADD_EMAIL_ERROR,
        payload: ["email cannot be empty"],
      });
      return;
    }
    if (!validateEmail(email)) {
      dispatchSignUpError({
        type: SignupActionKind.ADD_EMAIL_ERROR,
        payload: ["email must be formatted correctly"],
      });
      return;
    }
    if (isHTML(username)) {
      dispatchSignUpError({
        type: SignupActionKind.ADD_USERNAME_ERROR,
        payload: ["username cannot contain html"],
      });
      return;
    }

    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          //phoneNumber, // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });

      console.log("user sign up response", response);

      // const { user } = response;
      // if (user) {
      //   console.log(user);
      //   setUsername(user.getUsername());
      //   getUser();
      //   setPendingEmailVerified(true);
      // }
      return response;
    } catch (error: any) {
      console.log("signup error", error);
      let message = error.message;
      if (message.includes(":")) {
        var n = message.lastIndexOf(":");
        var result = message.substring(n + 1);
        message = result;
      }
      let errorString = JSON.stringify(error).toLowerCase();
      let messageType: SignupActionKind;
      if (errorString.includes("username")) {
        messageType = SignupActionKind.ADD_USERNAME_ERROR;
      } else if (errorString.includes("password")) {
        messageType = SignupActionKind.ADD_PASSWORD_ERROR;
      } else if (errorString.includes("email")) {
        messageType = SignupActionKind.ADD_EMAIL_ERROR;
      } else {
        messageType = SignupActionKind.ADD_GENERAL_ERROR;
      }

      dispatchSignUpError({
        type: messageType,
        payload: [message],
      });
    }
  };

  const context = {
    user,
    signIn: signIn,
    signOut,
    signUp: signUp,
    signUpErrors,
    signInErrors,
    getUser: getUser,
    verify,
    pendingEmailVerified,
    username,
    verifyErrors,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
