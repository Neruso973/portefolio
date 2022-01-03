import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex-col">
      <img src={logo} alt="logo de Nelson" />
      <ul className="flex-col text-white text-3xl text-center">
        <li className="mt-12">
          <Link to="/">A Propos</Link>
        </li>
        <li className="mt-12">
          <Link to="/skills">Compétences</Link>
        </li>
        <li className="mt-12">
          <Link to="/formations">Formations</Link>
        </li>
        <li className="mt-12">
          <Link to="/projects">Projets</Link>
        </li>
        <li className="mt-12">
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
