import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/Collection">Collection</Link>
        <Link to="/Wantlist">Wantlist</Link>
      </nav>
    </>
  );
}
