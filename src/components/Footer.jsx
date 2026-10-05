import LinkedIn from "./../assets/flaticons/bxl-linkedin.svg";
import Facebook from "./../assets/flaticons/facebook-logo-24.png";
import Google from "./../assets/flaticons/google-plus-logo-24.png";
import Phone from "./../assets/flaticons/phone-solid-24.png";
import Twitter from "./../assets/flaticons/twitter-logo-24.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="links">
        <p>
          List<span>Race</span>
        </p>
        <ul>
          <li>
            <a href="#how-it-works">how it works</a>
          </li>
          <li>
            <a href="#explore">explore</a>
          </li>
          <li>
            <a href="#review">review</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <a href="#">my account</a>
          </li>
        </ul>
      </section>
      <section className="external-links">
        <ul>
          <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={Phone} alt="telephone image" />
            +254 702 125 404
          </li>
          <li>
            <img src={Facebook} alt="facebook icon" />
          </li>
          <li>
            <img src={Twitter} alt="twitter icon" />
          </li>
          <li>
            <img src={LinkedIn} alt="linked in icon" />
          </li>
          <li>
            <img src={Google} alt="google icon" />
          </li>
        </ul>
        <small>
          &copy;Copyright. Designed And Developed by Son of the King
        </small>
      </section>
    </footer>
  );
};

export default Footer;
