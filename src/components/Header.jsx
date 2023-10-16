import "../styles/components/header.sass";
import { useEffect } from "react";

import WelLogo from "../img/WebLogo";

const Header = () => {
  
  return (
    <div id="header" className="header-section">
      <div id="logo_desktop">
        <WelLogo />
      </div>
    </div>
  );
};

export default Header;
