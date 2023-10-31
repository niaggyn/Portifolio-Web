import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import TitlePag from "../components/TitlePag";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";


//img
import img01 from "../img/gallery/apr.jpg";
import img02 from "../img/gallery/apre.jpg";
import img03 from "../img/gallery/citacao1.jpg";
import img04 from "../img/gallery/citacao2.jpg";
import img05 from "../img/gallery/citacao3.jpg";
import img06 from "../img/gallery/citacao4.jpg";
import img07 from "../img/gallery/INSTA32.jpg";
import img08 from "../img/gallery/INSTAGRAM8.jpg";
import img09 from "../img/gallery/INSTAGRAM9.jpg";
import img10 from "../img/gallery/INSTAGRAM5.jpg";
import img11 from "../img/gallery/promotion-web.jpg";
import img12 from "../img/gallery/tec1.jpg";
import img13 from "../img/gallery/tec2.jpg";
import img14 from "../img/gallery/tecnologo.jpg";
import img15 from "../img/gallery/youtube-perfil.jpg";

//style
import "../styles/components/gallery.sass";

const GalleryFiles = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];
const enderecosImg = [{ id: "01", src: { img01 } }];
function Gallery() {
  const [imagens, setImagens] = useState(0);

  useEffect(() => {
    const randomGallery = () => {
      setImagens((index) => (index + 1) % GalleryFiles.length);
    };
    const interval = setInterval(randomGallery, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
            <figure>
              <img src={GalleryFiles[imagens + 2]} alt="" id="img-back" />
              <figcaption></figcaption>
            </figure>
          </div>
          <div id="gallery_grid">
            <div id="gallery_left">
              <figure>
                <img src={GalleryFiles[imagens]} alt="" id="img-back" />
                <figcaption></figcaption>
              </figure>
            </div>
            <div id="gallery_right">
              <figure>
                <img src={GalleryFiles[imagens - 1]} alt="" id="img-back" />
                <figcaption></figcaption>
              </figure>
              <figure>
                <img src={GalleryFiles[imagens + 1]} alt="" id="img-back" />
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
