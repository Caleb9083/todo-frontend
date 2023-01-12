import { createContext } from "react";

export const UserContext = createContext({
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  isLoggedIn: "",
});
