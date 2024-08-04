import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={{ enter: 700 }} // Adjust the timeout to synchronize with CSS animation
        unmountOnExit
      >
        <div className="route-wrapper">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/CareWise" element={<HomePage />} />
            <Route path="/care-search" element={<CareSearchPage />} />
            <Route path="/care-result" element={<CareResultPage />} />
            <Route path="/care-result2" element={<CareResultPage2 />} />
            <Route path="/label-ex" element={<LabelExPage />} />
            <Route path="/label-ex-result" element={<LabelExResult />} />
            <Route path="/label-search" element={<LabelSearchPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  const public_url = "https://jj1kim.github.io/CareWise";
  return (
    <div className="App">
      <BrowserRouter basename={public_url}>
        <ScrollToTop />
        <div id="wrapper" className="flex flex-col items-center">
          <Header />
          <AnimatedRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
