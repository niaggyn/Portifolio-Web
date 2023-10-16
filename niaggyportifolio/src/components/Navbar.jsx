import { RxHamburgerMenu } from "react-icons/rx";

import "../styles/components/navbar.sass";
import Menu from "./Menu";
import { useEffect, useRef, useState, forwardRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const ref = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => {
      window.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav id="menu-container">
      <button id="menu-icon">
        <RxHamburgerMenu onClick={toggleMenu}></RxHamburgerMenu>
      </button>
      <div ref={menuRef}>
        {menuOpen && (
          <div ref={ref}>
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
