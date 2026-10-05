import reviews from "../data/reviews";
import Ratings from "./../assets/flaticons/rating stars.png";

const Reviews = () => {
  return (
    <section className="reviews" id="review">
      <h2>clients reviews</h2>
      <p>What our client say about us</p>
      <div className="client-reviews-container">
        <div className="client-reviews">
          {reviews.map((review) => (
            <Review
              key={review.id}
              c_image={review.c_image}
              c_alt={review.c_alt}
              c_address={review.c_address}
            />
          ))}
        </div>
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
