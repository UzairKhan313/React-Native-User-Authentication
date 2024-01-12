import axios from "axios";
import { FIRE_BASE_API_KEY } from "../config/key";

export async function createUser(email, password) {
  const responce =  await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      FIRE_BASE_API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
