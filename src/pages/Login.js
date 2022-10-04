import { useState, useContext } from "react";
import { app } from "../utils/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { NavigateNextRounded } from "@mui/icons-material";

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { user, setUser } = useContext(UserContext);

  // useContext set logged in as true to render search and login buttons

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(() => ({
          loggedIn: true,
        }));
        navigate("/");
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found")
          setError("Email not found in the database");
        else if (error.code === "auth/wrong-password")
          setError("Wrong password");
        else {
          setError(error.code);
        }
      });
  };

  // Sign up with Google
  const signUpWithGoogle = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(() => ({ loggedIn: true }));
        navigate("/");
      })
      .catch((error) => console.log(error.code));
  };

  // Sign up with Github
  const signUpWithGithub = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error.code));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LoginOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(email) => setEmail(email.target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(password) => setPassword(password.target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Typography
              sx={{ paddingTop: "10px", fontWeight: "600", color: "red" }}
            >
              {error}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <GoogleButton onClick={signUpWithGoogle} />
              <GithubButton onClick={signUpWithGithub} />
            </div>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
