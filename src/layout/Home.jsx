import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

//img
import logoMobile from "../img/logoMobile.png";
import msg from "../img/bemVindo.svg";
import cvitae from "../img/curriculum.svg";

//style
import "../styles/components/home.sass";

const Home = () => {
  return (
    <>
      <section className="home" id="home_container">
        <div>
          <Navbar />
        </div>
        <div id="home_content">
          <div id="logo">
            <img src={logoMobile} alt="NiaggyWebDeveloper" />
          </div>
          <div id="apresentation">
            <div id="profile_apresentation">
              <div id="msg_home">
                <img src={msg} alt="Bem-Vindo" />
                <div id="foto"></div>
                <p>
                  Olá, sou <strong>Niaggy Novoa</strong>, um recém-desenvolvedor
                  e entusiasta na área da computação e designer. Formado como
                  tecnólogo em construção de edifícios em 2018, e atualmente
                  graduando em Engenharia da Computação pelo Instituto Federal
                  de Ciência e Tecnologia do Maranhão, apresento um breve resumo
                  da minha trajetória nesse mundo digital neste portifólio.De
                  forma resumida, este portifólio online é um dos meus projetos
                  recentemente desenvolvidos, que reuni diversos trabalhos e
                  publicações na área de web-desenvolvimento, web-designer e
                  construção civil. Como tudo está em movimento, este projeto
                  ainda está no início, então agradeço sua visita e retorne aqui
                  sempre que possível.
                </p>
              </div>
              <div id="perfil">
                <div id="perfil_left"></div>
                <div id="perfil_right">
                  <a
                    href="https://github.com/niaggyn"
                    alt="github"
                    target="_blank"
                  >
                    <BsGithub />
                    <p>niaggynovoa</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/niaggy-novoa-296497b4/"
                    alt="github"
                    target="_blank"
                  >
                    <BsLinkedin />
                    <p>niaggynovoa</p>
                  </a>
                </div>
              </div>
              <div id="cvitae">
                <button>
                  <a
                    href="https://www.linkedin.com/in/niaggy-novoa-296497b4/"
                    target="_blank"
                  >
                    <img src={cvitae} alt="Baixe o pdf do curriculo" />
                  </a>
                </button>
              </div>
              <div id="social-medias">
                <div id="link_content">
                  <a
                    href="https://www.instagram.com/niaggynovoa/"
                    id="link_contact"
                    target="_blank"
                  >
                    <BsInstagram />
                    <p>@niaggysilva</p>
                  </a>
                </div>
                <div id="link_content">
                  <a
                    href="https://www.linkedin.com/in/niaggy-novoa-296497b4/"
                    id="link_contact"
                    target="_blank"
                  >
                    <BsLinkedin />
                    <p>niaggysilva</p>
                  </a>
                </div>
                <div id="link_content">
                  <a
                    href="https://github.com/niaggyn"
                    id="link_contact"
                    target="_blank"
                  >
                    <BsGithub />
                    <p>niaggysilva</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="nextPagHome">
            <Link
              to="projets_container"
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

export default Home;
