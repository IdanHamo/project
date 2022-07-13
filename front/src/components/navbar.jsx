import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const regularLinks = ["Home", "About", "Cards"];
  const links = ["Login", "Register"];
  return (
    <nav className="container nav">
      <div className="list-container">
        <Link to="home">
          <img
            className="logoImg"
            src="https://unitysro.net/wp-content/themes/armadon/assets/images/logos/logo-icon.svg"
            alt="logo"
          />
        </Link>
        <ul>
          {regularLinks.map((link) => {
            return (
              <li className="links" key={link}>
                <NavLink to={link}>{link}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="list-container">
        <ul>
          {links.map((link) => {
            return (
              <li className="links" key={link}>
                <NavLink to={link}>{link}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
