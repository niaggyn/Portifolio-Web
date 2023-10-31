//style
import "../../../styles/components/slider/desktop/cardDesktop.sass";

import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import Gem from "../../../img/gem";
import iconsDev from "../../../img/icons.png";

//api
import { cards } from "./SliderCardDesktop";

function CardDesktop({ img, name, id, description, detail }) {
  const [show, setShow] = useState(false);
  const [cor, setCor] = useState(null);
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <>
      <div className="card_content_desktop">
        <animated.div
          className="cardDesktop"
          style={props3}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div id="img-file">
            <img src={img} alt="" />
          </div>
          <div id="template-for-desktop">
            <Gem />
            <div id="project-file-title">
              <div id="title-project-file">
                <h1>{id}</h1>
                <p>{name}</p>
                <hr />
                
              </div>
              <div id="project-description">
                <p>{description}</p>
                <p id="detalhes">{detail}</p>
                <p id="ex">*Em estágio de desenvolvimento</p>
              </div>
            </div>

            <div id="project-selected">
              <img src={iconsDev} alt="" />
              {cards.map((card,idx) => (
                <div></div>
              ))}
            </div>
          </div>
        </animated.div>
      </div>
      <div className="css-1qzevvg" id="preview"></div>
    </>
  );
}

export default CardDesktop;
