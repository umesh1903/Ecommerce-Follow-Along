import "./App.css";
import CreatePage from "./pages/createPage";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<CreatePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
