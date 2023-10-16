import Navbar from "../components/Navbar";
import Nextpag from "../components/Nextpag";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { forwardRef, useRef, useState } from "react";
import {Link} from 'react-scroll'


import Logo from "../img/logo";
import logoMobile from '../img/logoMobile.png'
import msg from "../img/bemVindo.svg";
import cvitae from "../img/curriculum.svg";
import gif from '../img/DMa.gif'

import "../styles/components/home.sass";


const Home = () => {
  

  return (
    <>
      <section className="home" id="home_container">
        <div><Navbar/></div>
        <div id="home_content">
          <div id="logo">
            {/* <Logo /> */}
            <img src={logoMobile} alt="NiaggyWebDeveloper" />
          </div>
          <div id="msg_home">
            <img src={msg} alt="Bem-Vindo" /> {/**Seja Bem-vindo */}
            <div id="foto"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              odio repellendus, distinctio dignissimos hic exercitationem a quos?
              Odio quibusdam deleniti molestiae ad laborum. Corrupti incidunt
              vitae excepturi temporibus cum amet. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Molestias totam tempora similique
              dolorem, nemo illum distinctio illo porro, fugit id minus quae
              dolores magni repellat sunt, ea quo eius cupiditate?
            </p>
          </div>
          <div id="perfil">
            <div id="perfil_left">
              <a href="#">
                <img src={gif} alt="" /> {/**FOTO PERFIL */}
              </a>
            </div>
            <div id="perfil_right">
              <a href="#" alt="github">
                <BsGithub />
                <p>niaggynovoa</p> {/**Vai se tornar um value */}
              </a>
              <a href="#" alt="github">
                <BsLinkedin />
                <p>niaggynovoa</p> {/**Vai se tornar um value */}
              </a>
            </div>
          </div>
          <div id="cvitae">
            <button>
              <a href="#">
                <img src={cvitae} alt="Baixe o pdf do curriculo" />
              </a>
            </button>
          </div>
          <div id="social-medias">
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
