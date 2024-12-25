import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio"; // Corrected the typo in the import statement

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
