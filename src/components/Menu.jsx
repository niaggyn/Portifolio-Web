import { Link } from "react-scroll";
import Barra from "../img/barra";
import { useEffect, useRef } from "react";

//icons
import { ImHome3 } from "react-icons/im";
import { GiGraduateCap } from "react-icons/gi";
import { LuGalleryHorizontal, LuGalleryThumbnails } from "react-icons/lu";
import { BiSolidContact } from "react-icons/bi";

//style
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
            <a href="#">
              <ImHome3 />
              HOME
            </a>
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
            <a href="#">
              <LuGalleryThumbnails />
              Projetos
            </a>
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
            <a href="#">
              <GiGraduateCap />
              Habilidades
            </a>
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
            <a href="#">
              <LuGalleryHorizontal />
              Galeria
            </a>
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
            <a href="#">
              <BiSolidContact />
              Contato
            </a>
          </Link>
        </li>
        <li>
          <Link id="links">
            <a id="desatived" to="#">
              Article...
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
