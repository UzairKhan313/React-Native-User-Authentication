import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../utils/auth";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAutenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (err) {
      Alert.alert(
        "Authentication Faild",
        "Couldn't create User. Please Check your Credietials or try Again latter"
      );
    }
    setIsAuthenticating(false);
  }
  if (isAutenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
