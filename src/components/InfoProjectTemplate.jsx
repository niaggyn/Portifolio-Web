import React from "react";

import Gem from "../img/gem";
import Barra from "../img/barra";
import "../styles/components/infoProjectTemplate.sass";

import { cards } from "./ProjectPageFiles/SliderCard";

const InfoProjectTemplate = () => {
  let i;
  return (
    <>
      <div id="template_preview">
        <Gem />
        <div id="titulo_project">
          <h1>01</h1>
          <p>TITULO</p>
          <Barra />
        </div>
        <div id="select_project">
          {cards.map((card) => (
            <div></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoProjectTemplate;
