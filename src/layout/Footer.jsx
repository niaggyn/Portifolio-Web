import Logo from "../img/logoBlack";
import logoMobileFooter from '../img/logoMobileFooter.png'
import "../styles/components/footer.sass";

const Footer = () => {
  return (
    <section id="footer">
      <div id="footer-content">
        <img src={logoMobileFooter} alt="NiaggyWebDeveloper" />
      </div>
    </section>
  );
};

export default Footer;
