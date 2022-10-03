import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
