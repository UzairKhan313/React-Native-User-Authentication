import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../utils/auth";

function SignupScreen() {
  const [isAutenticating, setIsAuthenticating]= useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);

  }
  if(isAutenticating){
    return <LoadingOverlay message="Creating User..."/>
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
