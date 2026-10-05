import { useEffect, useState } from "react";
import Search from "./../assets/flaticons/magnifying-glass.png";

const FirstPart = () => {
  return (
    <header>
      <section className="first-part">
        <ul className="selection">
          <li>
            <select name="language" id="language">
              <option value="">EN</option>
              <option value="">BN</option>
              <option value="">AB</option>
            </select>
          </li>
          <li>
            <select name="currency" id="currency">
              <option value="">USD</option>
              <option value="">EURO</option>
              <option value="">BDT</option>
            </select>
          </li>
          <li>
            <img src={Search} alt="search icon" />
          </li>
        </ul>
        <ul className="other">
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </section>
    </header>
  );
};
const SecondPart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="second-part">
      <p>
        List<span>Race</span>
      </p>
      {isMobile ? (
        <div className="mobile-menu">
          <div
            className={`hamburger ${isMenuOpen ? "open" : undefined}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {isMenuOpen && (
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#how-it-works">HOW IT WORKS</a>
              </li>
              <li>
                <a href="#explore">EXPLORE</a>
              </li>
              <li>
                <a href="#review">REVIEW</a>
              </li>
              <li>
                <a href="#blog">BLOG</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#how-it-works">HOW IT WORKS</a>
          </li>
          <li>
            <a href="#explore">EXPLORE</a>
          </li>
          <li>
            <a href="#review">REVIEW</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <>
      <FirstPart />
      <SecondPart />
    </>
  );
};
export default Header;
