import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { SignOutOfApp } from "../utils/logout";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              component={Link}
              to={"/"}
            >
              <FitnessCenterIcon sx={{ mr: 1 }} />
            </IconButton>
            <Box sx={{ flexGrow: "1" }}></Box>
            {user?.loggedIn === true ? (
              <>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    backgroundColor: "#3399ff",
                    "&:hover": { backgroundColor: "#01579b " },
                    ml: 0,
                    width: "auto",
                    pr: "10px",
                  }}
                ></Box>
                <Button
                  component={Link}
                  to={"/login"}
                  color="inherit"
                  sx={{ pl: 3, mr: 3 }}
                  endIcon={<LogoutIcon />}
                  onClick={SignOutOfApp}
                >
                  <Typography sx={{ textTransform: "capitalize" }}>
                    Log out
                  </Typography>
                </Button>
              </>
            ) : (
              <Button
                component={Link}
                to={"/login"}
                color="inherit"
                sx={{ pl: 3, mr: 3 }}
                endIcon={<LoginIcon />}
              >
                <Typography sx={{ textTransform: "capitalize" }}>
                  Sign in
                </Typography>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
