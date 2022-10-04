import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { InputBase } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
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
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Atomic Fitness
              </Typography>
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
                >
                  <Box
                    sx={{
                      height: "100%",
                      position: "absolute",
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SearchIcon />
                  </Box>
                  <InputBase
                    sx={{ color: "inherit", pl: "25px" }}
                    placeholder="Search..."
                  />
                </Box>
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
