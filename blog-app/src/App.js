import "./App.css";
import { Route, Routes } from "react-router-dom";

import IndexPage from "./components/Home/Pages/IndexPage";
import Layout from "./components/Layout/Layout";
import LoginPage from "./components/Home/Pages/LoginPage";
import RegisterPage from "./components/Home/Pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
