import LinkedIn from "./../assets/flaticons/bxl-linkedin.svg";
import Facebook from "./../assets/flaticons/facebook-logo-24.png";
import Google from "./../assets/flaticons/google-plus-logo-24.png";
import Phone from "./../assets/flaticons/phone-solid-24.png";
import Twitter from "./../assets/flaticons/twitter-logo-24.png";
const Social_Link = ({ image, alt }) => {
  return (
    <li>
      <img src={image} alt={alt} width="20px" height="20px" />
    </li>
  );
};
const ExternalLinks = () => {
  return (
    <ul>
      <li>
        <img src={Phone} alt="telephone image" width="20px" height="20px" />
        +254 702 125 404
      </li>
      <Social_Link image={LinkedIn} alt="linked in icon" />
      <Social_Link image={Facebook} alt="facebook icon" />
      <Social_Link image={Twitter} alt="twitter icon" />
      <Social_Link image={Google} alt="google icon" />
    </ul>
  );
};
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
        <ExternalLinks />
        <small>
          &copy;Copyright. Designed And Developed by Son of the King
        </small>
      </section>
    </footer>
  );
};

export default Footer;
