import C from "../img/c";
import Java from "../img/java";

import "../styles/components/fourthCard.sass";

const programmer = [
  { name: "C", icon: <C /> },
  { name: "Java", icon: <Java /> },
];

const FourthCard = () => {
  return (
    <div className="cardsecondary_block" id="cards2_content">
      {programmer.map((design) => (
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

export default FourthCard;
