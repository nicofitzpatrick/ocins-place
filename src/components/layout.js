import * as React from "react";
import NavBar from "./navbar";
import { container } from "./layout.module.css";

const Layout = () => {
  return (
    <div className={container}>
      <NavBar />
    </div>
  );
};

export default Layout;
