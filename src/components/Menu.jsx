import { Link } from "react-scroll";
import Barra from "../img/barra";
import { useEffect, useRef } from "react";

import "../styles/components/menu.sass";

const Menu = () => {
  return (
    <section id="menu_container">
      <ul>
        <li>
          <Link
            id="links"
            to="home_container"
            spy={true}
            smooth={true}
            offset={0}
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
            offset={0}
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
            offset={0}
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
            offset={0}
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
            offset={0}
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
        <Barra />
      </ul>
    </section>
  );
};

export default Menu;
