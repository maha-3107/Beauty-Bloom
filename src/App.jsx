import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesConfig from "./routes/index.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "";
  }, [darkMode]);

  return (
    <BrowserRouter>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;