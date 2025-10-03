import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import AbbigliamentoPage from "./components/AbbigliamentoPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/abbigliamento" element={<AbbigliamentoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
