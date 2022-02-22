import * as React from "react";
import { Link } from "gatsby";
import { navContainer, navLinks, navLink, logoName } from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={navContainer}>
      <div className={logoName}>
        <Link>Ocins Place</Link>
      </div>

      {/* desktop nav */}
      <ul className={navLinks}>
        <li>
          <Link className={navLink}>home</Link>
        </li>
        <li>
          <Link className={navLink}>gallery</Link>
        </li>
        <li>
          <Link className={navLink}>albums</Link>
        </li>
        <li>
          <Link className={navLink}>bio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
