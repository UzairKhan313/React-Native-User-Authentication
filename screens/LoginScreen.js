import {useState} from 'react';

import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../utils/auth';

function LoginScreen() {

  const [isAutenticating, setIsAuthenticating]= useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }

  if(isAutenticating){
    return <LoadingOverlay message="Loging you in..."/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}


export default LoginScreen;
