import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <img
        src="https://i.imgur.com/VqPYDtJ.png"
        className="logo"
        alt="BBQ wars"
      />
      <nav>
        <Link to="/">Top Rated BBQ</Link>
        <Link to="/new-slip">New Scoring Slip</Link>
        <Link to="/judging-rules">Judging Rules</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Nav;
