import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card.jsx";
import Carousel from "./Carousel";

import dracula from "../../img/DMa.gif";
import anime from "../../img/2unv.gif";
import drive from "../../img/fxk4.gif";
import via from "../../img/OvZ.gif";

import "../../styles/components/slider/SliderCard.sass";

export const cards = [
  {
    key: uuidv4(),
    content: <Card img={anime} name="Projeto 1" id="01"/>,
  },
  {
    key: uuidv4(),
    content: <Card img={dracula} name="Projeto 2" id="02"/>,
  },
  {
    key: uuidv4(),
    content: <Card img={via} name="Projeto 3" id="03"/>,
  },
  {
    key: uuidv4(),
    content: <Card img={drive} name="Projeto 4" id="04"/>,
  },
];

function SliderCard() {
  
  return (
    <div className="main">
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
};

export default SliderCard;
