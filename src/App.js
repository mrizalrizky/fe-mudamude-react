import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Header} />
      </Routes>
    </Router>
  );
}

export default App;
