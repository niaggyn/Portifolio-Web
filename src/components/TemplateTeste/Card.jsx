import "../../styles/components/slider/Card.sass";

import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import { useState } from "react";
import InfoProjectTemplate from "../InfoProjectTemplate";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import Gem from "../../img/gem";
import Barra from "../../img/barra";
import "../../styles/components/infoProjectTemplate.sass";

import { cards } from "../TemplateTeste/SliderCard";

function Card({ img, name, id }) {
  const [show, setShow] = useState(false);
  const [cor, setCor] = useState(null);
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  useEffect(() => {
    const select = document.getElementById("preview");
    select.addEventListener("click", () => {
      console.log("sss");
    });
  });
  return (
    <>
      {/* <div className="icon-arrow"><MdOutlineKeyboardArrowLeft/></div> */}
      <div className="card_content">
        <animated.div
          className="card"
          style={props3}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div id="template_preview">
            <Gem />
            <img src={img} alt={name} />
            <div id="titulo_project">
              <h1>{id}</h1>
              <p>{name}</p>
              <Barra />
            </div>
            <div id="select_project">
              {cards.map((card, index) => (
                <div key={index}></div>
              ))}
            </div>
          </div>
        </animated.div>
        {/* <div className="template_info" ><InfoProjectTemplate /></div> */}
      </div>
      <div className="css-1qzevvg" id="preview"></div>
      {/* <div className="icon-arrow"><MdOutlineKeyboardArrowRight/></div> */}
    </>
  );
}

export default Card;
