import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import CareSearchPage from "./routes/CareSearchPage";
import CareResultPage from "./routes/CareResultPage";
import CareResultPage2 from "./routes/CareResultPage2";
import LabelExPage from "./routes/LabelExPage";
import LabelExResult from "./routes/LabelExResultPage";
import LabelSearchPage from "./routes/LabelSearchPage";
import LoginPage from "./routes/LoginPage";
import UserPage from "./routes/UserPage.jsx";
import ClosetPage from "./routes/ClosetPage.jsx";
import SignupPage from "./routes/SignupPage";
import SignupDetailsPage from "./routes/SignupDetailsPage.jsx";

import { useSelector } from "react-redux";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  // 로그인 상태를 관리할 state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // 페이지가 로드될 때 localStorage에서 로그인 상태를 확인
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div className="w-[1440px] flex flex-col">
      <Header
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 700 }} // Adjust the timeout to synchronize with CSS animation
          unmountOnExit
        >
          <div className="route-wrapper items-center flex flex-center">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              {/* 로그인 페이지에서 로그인 성공 시 onLogin 호출 */}
              <Route
                path="/auth/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
              <Route
                path="/auth/signup/details"
                element={<SignupDetailsPage />}
              />
              <Route path="/auth/signup" element={<SignupPage />} />
              <Route path="/care-search" element={<CareSearchPage />} />
              <Route path="/care-result" element={<CareResultPage />} />
              <Route path="/care-result2" element={<CareResultPage2 />} />
              <Route path="/label-ex" element={<LabelExPage />} />
              <Route path="/label-ex-result" element={<LabelExResult />} />
              <Route path="/label-search" element={<LabelSearchPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/closet" element={<ClosetPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

function App() {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`App ${darkMode ? "dark bg-black" : ""}`}>
      <BrowserRouter basename="/CareWise">
        <ScrollToTop />
        <div id="wrapper" className="flex flex-col items-center">
          <AnimatedRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
