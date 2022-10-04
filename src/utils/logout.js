import { useContext } from "react";
import { app } from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const SignOutOfApp = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const auth = getAuth(app);

  signOut(auth)
    .then(() => {
      console.log("You signed out");
      setUser(() => ({
        loggedIn: false,
      }));
      navigate("/login");
    })
    .catch((error) => {
      console.log("Something went wrong...");
    });
};
