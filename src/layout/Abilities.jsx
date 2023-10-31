//components
import MainCard from "../components/MainCard";
import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import TitlePag from "../components/TitlePag";
import SecondCard from "../components/SecondCard";
import ThirdCard from "../components/ThirdCard";
import FourthCard from "../components/FourthCard";
import { Link } from "react-scroll";

//style
import "../styles/components/abilities.sass";

//icons
import { HiChevronDoubleRight } from "react-icons/hi";



const Abilities = () => {
  return (
    <section id="abilities_container">
      <Navbar />
      <div id="abilities_content">
        <div id="ability_title">
          <TitlePag title={"Habilidades"} />
        </div>
        <div id="ability_container">
          <div id="card-desktop-orders">
            <div id="dev_web" className="devs_style">
              <HiChevronDoubleRight />
              <h3>Desenvolvimento Web</h3>
            </div>
            <div>
              <MainCard />
            </div>
          </div>
          <div id="card-desktop-orders">
            <div id="web_designer" className="devs_style">
              <HiChevronDoubleRight />
              <h3>Web Designer / Gráfico</h3>
            </div>
            <div>
              <SecondCard />
            </div>
          </div>
          <div id="card-desktop-orders">
            <div id="teconologo" className="devs_style">
              <HiChevronDoubleRight />
              <h3>Planejamento / Desenho Técnico</h3>
            </div>
            <div>
              <ThirdCard />
            </div>
          </div>
        </div>
        <div id="programmer">
          <div id="programmer_tips">
            <div className="devs_style" id="dev-prog">
              <HiChevronDoubleRight />
              <h3>Programação</h3>
            </div>
            <div id="cards2_content">
              <FourthCard />
            </div>
          </div>
        </div>
        
      </div>
      <div id="nextPagAbility">
          <Link
            to="gallery_container"
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
};

export default Abilities;
