import React, { useState } from "react";
import Gem from "../img/gem";
import Barra from "../img/barra";
import Slider from "react-slick";
import "../styles/components/projectCards.sass";


import dracula from "../img/DMa.gif";
import anime from "../img/2unv.gif";
import drive from "../img/fxk4.gif";
import via from "../img/OvZ.gif";


import InfoProjectTemplate from "./InfoProjectTemplate";

import "../styles/components/slick.css";
import "../styles/components/slick-theme.css";

const ProjectsCard = ({ cards }) => {
  const imagens = [dracula, anime, drive, via];
  const [currentCard, setCurrentCard] = useState(0);

  const prevCard = () => {
    setCurrentCard((currentCard - 1 + cards.length) % cards.length);
  };

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % cards.length);
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <>
      <section id="projectCard_container">
        <div id="template_previewFixed">
          <InfoProjectTemplate />
        </div>

        <div id="template_img">
          <Slider {...settings}>
            {imagens.map((img, index) => (
              <div>
                <img src={img} alt={img} id="img_preview"/>
              </div>
            ))}
          </Slider>
          {/* <div id="previous_project">
            <div id="background_preview">
              <img src="" alt="" />
            </div>
          </div>
          <div id="project_main">
            <div id="background_preview">
              <img src={gif} alt="" />
            </div>
            <div id="template_preview">
              <InfoProjectTemplate />
            </div>
          </div>
          <div id="next_project"></div> */}
        </div>
      </section>
    </>
  );
};

export default ProjectsCard;
