import { CognitoUser } from "@aws-amplify/auth";
import { CognitoUserExt } from "../store/auth-context";
export type AuthContextType = {
  user: CognitoUserExt | null;
  username: string | null;
  signIn: (username: string, password: string) => {};
  signUp: (username: string, password: string, email: string) => void;
  verify: (usernmae: string, verifyCode: string) => void;
  signOut: () => {};
  getUser: () => CognitoUserExt | null;
  signUpErrors: {
    email: string[];
    username: string[];
    password: string[];
    nonFieldErrors: string[];
  };
  signInErrors: {
    username: string[];
    password: string[];
    general: string[];
  };
  pendingEmailVerified: boolean;
  verifyErrors: {
    username: string[];
    verify: strign[];
    general: string[];
  };
};
