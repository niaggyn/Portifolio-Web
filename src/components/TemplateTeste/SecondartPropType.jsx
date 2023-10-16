import Photoshop from "../../img/photoshop";
import Coreldraw from "../../img/coreldraw";
import AdobeXd from "../../img/adobeXd";
import Illustrator from "../../img/illustrator";

import "../styles/components/secondaryCard.sass";

import Autocad from "../../img/autodesk";
import Revit from "../../img/revit";
import { GrOracle } from "react-icons/gr";
import Word from "../../img/word";
import { useState } from "react";

const [serviceTec, setServicesTec] = useState([
  { name: "AutoCad", icon: <Autocad /> },
  { name: "Revir", icon: <Revit /> },
  { name: "Primavera", icon: <GrOracle /> },
  { name: "Office", icon: <Word /> },
]);

const [designService, setDesignService] = useState([
  { name: "Photoshop", icon: <Photoshop /> },
  { name: "Illustrator", icon: <Illustrator /> },
  { name: "Adobe XD", icon: <AdobeXd /> },
  { name: "CorelDraw", icon: <Coreldraw /> },
]);

function SecondartPropType({ desenhoTec, designPack }) {
  {
    designPack && (
      <div className="cardsecondary_block">
        {designService.map((design) => (
          <a
            href="#"
            className="cardsecondary"
            id={design.name}
            key={design.name}
          >
            {design.icon}
            <h3>{design.name}</h3>
          </a>
        ))}
      </div>
    );
  }
  {
    desenhoTec && (
      <div className="cardsecondary_block">
        {serviceTec.map((service) => (
          <a
            href="#"
            className="cardsecondary"
            id={service.name}
            key={service.name}
          >
            {service.icon}
            <h3>{service.name}</h3>
          </a>
        ))}
      </div>
    );
  }
}

export default SecondartPropType;
