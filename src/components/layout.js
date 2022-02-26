import * as React from "react";
import { useState } from "react";
import NavBar from "./navbar";
import { container, dOff } from "./layout.module.css";

const Layout = ({ children }) => {

  const [mode, setMode] = useState(false);

  return (
    <div className={container}>
      <NavBar mode={mode} setMode={setMode} />
      <div className={mode ? dOff : ''}>
      {children}
      </div>
      
    </div>
  );
};

export default Layout;
