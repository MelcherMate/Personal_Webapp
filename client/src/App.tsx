import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Testpage from "./pages/Testing";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/test" element={<Testpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
