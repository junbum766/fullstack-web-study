import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <span>Router tutorial</span>
      <div>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/products" className="menu-item">
          Product
        </Link>
      </div>
    </header>
  );
}

export default Header;
