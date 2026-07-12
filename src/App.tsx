import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import "./App.css";

function App() {
  const [route, setRoute] = useState(() =>
    window.location.hash.startsWith("#/") ? window.location.hash : "#/home",
  );

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setRoute(currentHash.startsWith("#/") ? currentHash : "#/home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route === "#/all-projects" ? <ProjectsPage /> : <HomePage />;
}

export default App;
