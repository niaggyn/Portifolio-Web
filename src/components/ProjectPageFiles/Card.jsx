//style
import "../../styles/components/slider/Card.sass";

import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import Gem from "../../img/gem";
import Barra from "../../img/barra";
import iconsDev from "../../img/icons.png";

import { cardsMobile } from "./SliderCard";

function Card({ img, name, id, description, detail }) {
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
      <div className="card_content">
        <animated.div
          className="card"
          style={props3}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div id="Mobile_Preview">
            <div id="Mobile-img-project">
              <Gem />
              <img src={img} alt={name} />
            </div>
            <div id="Mobile-pr-info">
              <div id="Mobile-pr-title">
                <h1>{id}</h1>
                <p>{name}</p>
              </div>
              <Barra />
              <div id="Mobile-pr-description">
                <p>{description}</p>
                <p id="detail">{detail}</p>
              </div>
              <div id="Mobile-pr-select">
                <img src={iconsDev} alt="" />
                {cardsMobile.map((card, index) => (
                  <div key={index}></div>
                ))}
              </div>
            </div>
          </div>
        </animated.div>
      </div>
      <div className="css-1qzevvg"></div>
    </>
  );
}

export default Card;
