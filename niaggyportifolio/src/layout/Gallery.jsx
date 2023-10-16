import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import TitlePag from "../components/TitlePag";

import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-scroll";

import dracula from "../img/DMa.gif";
import anime from "../img/2unv.gif";
import drive from "../img/fxk4.gif";
import via from "../img/OvZ.gif";

import "../styles/components/gallery.sass";

function Gallery() {
  return (
    <section id="gallery_container">
      <div>
        <Navbar />
      </div>
      <section id="gallery_content">
        <div id="gallery-title">
          <TitlePag title="Galeria" />
        </div>
        <div id="gallery">
          <div id="topImg">
            <figure >
              <img src={anime} alt="" />
              <figcaption></figcaption>
            </figure>
          </div>
          <div id="gallery_grid">
            <div id="gallery_left">
              <figure>
                <img src={dracula} alt="" />
                <figcaption></figcaption>
              </figure>
            </div>
            <div id="gallery_right">
              <figure>
                <img src={drive} alt="" />
                <figcaption></figcaption>
              </figure>
              <figure>
                <img src={via} alt="" />
                <figcaption></figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="gallery_text">
          <HiChevronDoubleRight />
          <p>Todos os projetos estão no perfil do Github</p>
        </div>
      </section>
      <div id="nextPage">
        <Link
          to="contact_container"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Nextpag />
        </Link>
      </div>
    </section>
  );
}

export default Gallery;
