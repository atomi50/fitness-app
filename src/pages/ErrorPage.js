import React, { useEffect, useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [counter]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginTop: "50px", fontSize: "70px" }}>Error 404</h1>
      <ErrorIcon sx={{ margin: "50px", fontSize: "150px" }} />
      <span style={{ fontSize: "35px" }}>
        Page not found, redirecting to home page in{" "}
        <span style={{ fontSize: "50px", paddingLeft: "15px" }}>{counter}</span>
      </span>
    </div>
  );
}

export default ErrorPage;
