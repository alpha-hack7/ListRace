import Bulb from "./../assets/flaticons/bxl-facebook.svg";
import Location from "./../assets/flaticons/location.png";
import Binoculars from "./../assets/flaticons/vision.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>HOW IT WORKS</h2>
      <p>Learn More about how our website works</p>
      <div className="choice">
        <div>
          <figure>
            <img src={Bulb} alt="bulb with exclammation mark" />
          </figure>
          <h3>Choose What to Do</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque
            soluta ullam velit enim corporis similique voluptas.
          </p>
          <p className="readMore">
            <a href="#">Read More</a>
          </p>
        </div>
        <div>
          <figure>
            <img src={Binoculars} alt="binoculars image" />
          </figure>
          <h3>Find what you want</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque
            soluta ullam velit enim corporis similique voluptas.
          </p>
          <p className="readMore">
            <a href="#">Read More</a>
          </p>
        </div>
        <div>
          <figure>
            <img src={Location} alt="location icon on highway" />
          </figure>
          <h3>Explore amazing Place</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque
            soluta ullam velit enim corporis similique voluptas.
          </p>
          <p className="readMore">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
