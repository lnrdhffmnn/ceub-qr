import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import NotFound from "./pages/404/404";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;