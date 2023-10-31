import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

//style
import "../styles/components/cardMain.sass";

const webTools = [
  { name: "HTML5", icon: <AiFillHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <RiJavascriptFill /> },
  { name: "React JS", icon: <FaReact /> },
];

const MainCard = () => {
  return (
    <div className="card_block" id="cards_content">
      {webTools.map((web) => (
        <a href="#" className="card" id={web.name} key={web.name}>
          <div id="bkg-rotate"></div>
          <div id="textCard">
            {web.icon}
            <h3>{web.name}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MainCard;
