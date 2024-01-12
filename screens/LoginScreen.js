import { useState } from "react";
import { Alert } from "react-native";

import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../utils/auth";

function LoginScreen() {
  const [isAutenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert(
        "Authentication Faild",
        "Couldn't log you in. Please Check your Credietials or try Again latter"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAutenticating) {
    return <LoadingOverlay message="Loging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
