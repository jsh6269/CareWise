import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import CareSearchPage from "./routes/CareSearchPage";
import CareResultPage from "./routes/CareResultPage";
import LabelExPage from "./routes/LabelExPage";
import LabelExResult from "./routes/LabelExResultPage";
import LabelSearchPage from "./routes/LabelSearchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/care-search" element={<CareSearchPage />} />
            <Route path="/care-result" element={<CareResultPage />} />
            <Route path="/label-ex" element={<LabelExPage />} />
            <Route path="/label-ex-result" element={<LabelExResult />} />
            <Route path="/label-search" element={<LabelSearchPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
