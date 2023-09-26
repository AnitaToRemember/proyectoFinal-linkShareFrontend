import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyLinks from "./pages/MyLinks";
import HeaderBar from "./components/HeaderBar";
import NavigationBar from "./components/NavigationBar";
import NotFoundPage from "./pages/notFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import LinkPage from "./pages/LinkPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import FilterPage from "./pages/FilterPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import { Switch } from "./components/switch";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <main>
      <HeaderBar />
      <Switch/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mylinks" element={<MyLinks />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/links/:id" element={<LinkPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {user ? <NavigationBar /> : null}
    </main>
  );
}

export default App;
