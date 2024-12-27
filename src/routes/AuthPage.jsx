import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import SignupDetailsPage from "./SignupDetailsPage";
import SignupConfirmPage from "./SignupConfirmPage";

const AuthPage = ({ onLogin }) => {
  return (
    <div className="auth-page">
      <Routes>
        <Route path="login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="signup/details" element={<SignupDetailsPage />} />
        <Route path="signup/confirm" element={<SignupConfirmPage />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
