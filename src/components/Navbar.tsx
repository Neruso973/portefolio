import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex-col">
      <img src={logo} alt="logo de Nelson" />
      <ul className="flex-col text-white text-3xl text-center">
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/">A Propos</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/skills">Compétences</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/formations">Formations</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/projects">Portfolio</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
