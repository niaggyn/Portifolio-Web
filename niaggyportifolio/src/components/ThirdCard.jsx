import Autocad from "../img/autodesk";
import Revit from "../img/revit";
import { SiOracle } from "react-icons/si";
import Word from "../img/word";

import "../styles/components/secondaryCard.sass";

const serviceTec = [
  { name: "AutoCad", icon: <Autocad /> },
  { name: "Revit", icon: <Revit /> },
  { name: "Primavera", icon: <SiOracle /> },
  { name: "Office", icon: <Word /> },
];

const ThirdCard = () => {
  return (
    <div className="cardsecondary_block" id="cards_content">
      {serviceTec.map((design) => (
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
};

export default ThirdCard;
