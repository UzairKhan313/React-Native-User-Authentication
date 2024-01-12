import axios from "axios";
import { FIRE_BASE_API_KEY } from "../config/key";

// url for sign in https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
// url for signup  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[APIKEY]
async function authenticate(mode, email, password) {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` +
    FIRE_BASE_API_KEY;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
