import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import TitlePag from "../components/TitlePag";

import { ImWhatsapp } from "react-icons/im";
import { BiLogoTelegram } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import logoFooter from '../img/logoFooter.png'

import "../styles/components/contact.sass";

function Contact() {
  return (
    <section id="contact_container">
      <Navbar />
      <div id="contact_title">
        <TitlePag title={"Contato"} />
      </div>
      <div id="backHome">
        <Link
          to="home_container"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Nextpag />
        </Link>
      </div>
      <div id="contact_desk">
        <div id="contact_content">
          <div id="info_contact">
            <div id="phone">
              <h4>Phone:</h4>
              <p>+55 098 98729-4405</p>
              <ImWhatsapp />
              <BiLogoTelegram />
            </div>
            <div id="email">
              <h4>Email:</h4>
              <p>niaggyn@gmail.com</p>
            </div>
          </div>
          <div id="social-medias-contact">
            <div id="link_content">
              <a href="#" id="link_contact">
                <BsInstagram />
                <p>@niaggysilva</p>
              </a>
            </div>
            <div id="link_content">
              <a href="#" id="link_contact">
                <BsLinkedin />
                <p>niaggysilva</p>
              </a>
            </div>
            <div id="link_content">
              <a href="#" id="link_contact">
                <BsGithub />
                <p>niaggysilva</p>
              </a>
            </div>
          </div>
        </div>
        <div id="logo_footer">
          <img src={logoFooter} alt="niaggyUX" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
