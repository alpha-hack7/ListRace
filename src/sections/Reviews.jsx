import Ratings from "./../assets/flaticons/rating stars.png";
import C1 from "./../assets/images/clients/c1.png";
import C2 from "./../assets/images/clients/c2.png";
import C3 from "./../assets/images/clients/c3.png";
import C4 from "./../assets/images/clients/c4.png";

const Reviews = () => {
  return (
    <section className="reviews" id="review">
      <h2>clients reviews</h2>
      <p>What our client say about us</p>
      <div className="client-reviews">
        <Review c_image={C1} c_alt="Tom Leakar" c_address="London, UK" />
        <Review c_image={C2} c_alt="Monirul Islam" c_address="London, UK" />
        <Review c_image={C3} c_alt="Jackie Chan" c_address="London, UK" />
        <Review c_image={C4} c_alt="Shohrab Hossain" c_address="London, UK" />
      </div>
      <Listings />
    </section>
  );
};
const Listings = () => {
  return (
    <div className="listings">
      <div className="listings-image">
        <div className="numbers">
          <p>
            <span>90K+</span> <br />
            Listings
          </p>
          <p>
            <span>40k+</span> <br />
            Listing Categories
          </p>
          <p>
            <span>65k+</span> <br />
            Visitors
          </p>
          <p>
            <span>50k+</span> <br />
            Happy Clients
          </p>
        </div>
      </div>
    </div>
  );
};
const Review = ({ c_image, c_alt, c_address }) => {
  return (
    <div className="client">
      <div>
        <img src={c_image} alt={c_alt} />
        <div>
          <p>{c_alt}</p>
          <p>{c_address}</p>
          <img className="rating-star" src={Ratings} alt="rating stars" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in
        eaque aliquam corrupti
      </p>
    </div>
  );
};

export default Reviews;
