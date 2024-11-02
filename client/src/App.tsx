import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
