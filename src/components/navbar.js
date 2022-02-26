import * as React from "react";
import { Link } from "gatsby";
import { navContainer, navLinks, navLink, logoName, hamburger, line, open } from "./navbar.module.css";

const NavBar = ({mode, setMode}) => {

  const onClickHandler = (e) => {
    e.preventDefault();
    setMode(prevState => !prevState);
  }

  return (
    <nav className={navContainer}>
      <div className={logoName}>
        <Link>Ocins Place</Link>
      </div>


      {/* mobile */}
      <div onClick={onClickHandler} className={hamburger}>
        <div className={line}></div>
        <div className={line}></div>
        <div className={line}></div>
      </div>


      {/* desktop nav */}
      <ul className={`${navLinks} ${mode ? open : '' }`}>
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
