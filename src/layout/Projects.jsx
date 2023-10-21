import { forwardRef } from "react";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import TitlePag from "../components/TitlePag";
import Barra from "../img/barra";

import ProjectsCard from "../components/ProjectsCard";
import SliderCard from "../components/ProjectPageFiles/SliderCard";

import "../styles/components/Projects.sass";

import { cards } from "../components/ProjectPageFiles/SliderCard";
import SliderCardDesktop from "../components/ProjectPageFiles/desktop/SliderCardDesktop";

const Projects = ({ ref, img, name, id }) => {
  return (
    <>
      <section id="projets_container" ref={ref}>
        <div>
          <Navbar />
        </div>
        <div id="project-content">
          <div id="project-title">
            <TitlePag title="Projetos" />
          </div>
          <div id="forMobilePreview">
            {/**Necessita ajustes */}
            <div id="project_file">
              <SliderCard />
            </div>
            <div id="project_infotext">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                consectetur reprehenderit ab explicabo nisi rerum eligendi error
                totam doloribus aperiam, voluptatibus, ex atque.
              </p>
            </div>
          </div>
          <div id="forDesktopPreview">
            <SliderCardDesktop/>
          </div>
          <div id="next">
            <Link
              to="abilities_container"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nextpag />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
