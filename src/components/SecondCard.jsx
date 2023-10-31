import Photoshop from "../img/photoshop";
import Coreldraw from "../img/coreldraw";
import AdobeXd from "../img/adobeXd";
import Illustrator from "../img/illustrator";

//style
import "../styles/components/secondaryCard.sass";

const designPack = [
  { name: "Photoshop", icon: <Photoshop /> },
  { name: "Illustrator", icon: <Illustrator /> },
  { name: "Adobe XD", icon: <AdobeXd /> },
  { name: "CorelDraw", icon: <Coreldraw /> },
];

const SecondCard = () => {
  return (
    <div className="cardsecondary_block" id="cards_content">
      {designPack.map((design) => (
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

export default SecondCard;

