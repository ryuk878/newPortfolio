import "./App.css";
import Welcome from "./Pages/Welcome/Welcome"
import HomePage from "./Pages/Home/home-page"
import Projects from "./Pages/Projects/Projects"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
