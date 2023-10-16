import React from "react";
import Menu from "./Menu";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Barra from "../img/barra";

import seta from "../img/menuSeta.svg";
import "../styles/components/menuDesktop.sass";

const NavBarDesktop = () => {
  useEffect(() => {
    const showMenu = document.getElementById("seta-menu");
    const menuDesktop = document.getElementById("menu-desktop");
    showMenu.addEventListener("click", () => {
      if ((menuDesktop.style.left = "-170px")) menuDesktop.style.left = "0px";
      else if(menuDesktop.style.left = "0px")
        menuDesktop.classList.add('show-menu-desktop')
    });
  });
  return (
    <>
      <aside id="menu-desktop">
        <div id="menu-desk">
          <ul>
            <li>
              <Link
                id="links"
                to="home_container"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <a href="#">HOME</a>
              </Link>
            </li>
            <li>
              <Link
                id="links"
                to="projets_container"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <a href="#">Projetos</a>
              </Link>
            </li>
            <li>
              <Link
                id="links"
                to="abilities_container"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <a href="#">Habilidades</a>
              </Link>
            </li>
            <li>
              <Link
                id="links"
                to="gallery_container"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <a href="#">Galeria</a>
              </Link>
            </li>
            <li>
              <Link
                id="links"
                to="contact_container"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <a href="#">Contato</a>
              </Link>
            </li>
            <li>
              <Link id="links">
                <a id="desatived" to="#">
                  Article...
                </a>
              </Link>
            </li>
            <div>
              <Barra />
            </div>
          </ul>
        </div>
        <div id="seta-menu">
          <img src={seta} alt="Side-Menu" />
        </div>
      </aside>
    </>
  );
};

export default NavBarDesktop;
