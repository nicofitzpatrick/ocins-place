import * as React from "react";
import NavBar from "./navbar";
import { container } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
