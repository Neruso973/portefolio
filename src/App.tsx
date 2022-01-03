import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Formations from "./components/Formations";
import Projects from "./components/Projects";
import Cv from "./components/Cv";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App flex">
        <nav className=" flex-auto w-72 navbar  h-screen fixed">
          <Navbar />
        </nav>
        <div className="flex-auto ml-72 flex-col">
          <Switch>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<Cv />} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
