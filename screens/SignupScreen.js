import { useContext, useState } from "react";

import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../utils/auth";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAutenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication Faild",
        "Couldn't create User. Please Check your Credietials or try Again latter"
      );
      setIsAuthenticating(false);
    }
  }
  if (isAutenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
