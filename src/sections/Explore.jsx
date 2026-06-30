import B1 from "./../assets/images/explore/e1.jpg";
import B2 from "./../assets/images/explore/e2.jpg";
import B3 from "./../assets/images/explore/e3.jpg";
import B4 from "./../assets/images/explore/e4.jpg";
import B5 from "./../assets/images/explore/e5.jpg";
import B6 from "./../assets/images/explore/e6.jpg";
import C6 from "./../assets/images/explore/person.png";

// general
import Like from "./../assets/flaticons/heart.png";
import Location from "./../assets/flaticons/location.png";
import Upload from "./../assets/flaticons/upload.png";
const Explore = () => {
  return (
    <section className="explore" id="explore">
      <h2>explore</h2>
      <p>Explore New place, food, culture around the world and many more</p>
      <div className="explore-places">
        <Place
          b_image={B1}
          c_image={C6}
          b_alt="Tommy Helfinger Bar"
          rate="5.0"
          rate_color="skyblue"
          ratings="10 ratings"
          form_amount_range="5$ - 300$"
          nature="Restaurant"
          status="Closed"
          rate_status="Best Rated"
        />
        <Place
          b_image={B2}
          c_image={C6}
          b_alt="Swim And Dine Resort"
          rate="4.6"
          rate_color="green"
          ratings="8 ratings"
          form_amount_range="50$ - 500$"
          nature="Hotel"
          status="Open"
          rate_status="Featured"
        />
        <Place
          b_image={B3}
          c_image={C6}
          b_alt="Europe Tour"
          rate="5.0"
          rate_color="orange"
          ratings="15 ratings"
          form_amount_range="5k$ - 10k$"
          nature="Destination"
          status="Closed"
          rate_status="Best Rated"
        />
        <Place
          b_image={B4}
          c_image={C6}
          b_alt="Bungalow with Swimming Pool"
          rate="5.0"
          rate_color="orangered"
          ratings="10 ratings"
          form_amount_range="10k$ - 15k$"
          nature="Real Estate"
          status="Closed"
          rate_status="Most Viewed"
        />
        <Place
          b_image={B5}
          c_image={C6}
          b_alt="Vintage Car Expo"
          rate="4.2"
          rate_color="green"
          ratings="8 ratings"
          form_amount_range="500$ - 1200$"
          nature="Automotion"
          status="Open"
          rate_status="Featured"
        />
        <Place
          b_alt="Thailand Tour"
          b_image={B6}
          c_image={C6}
          rate="5.0"
          rate_color="orangered"
          rate_status="Best Rated"
          ratings="15 ratings"
          form_amount_range="5k$ - 10k$"
          nature="Destination"
          status="Closed"
        />
      </div>
    </section>
  );
};
const Place = ({
  b_image,
  c_image,
  rate_status,
  status,
  b_alt,
  rate,
  rate_color,
  form_amount_range,
  ratings,
  nature,
}) => {
  return (
    <div className="place">
      <img src={b_image} alt={`${b_alt} image`} />
      <div className="place-details">
        <h3>{b_alt}</h3>
        <div className="ratings">
          <p>
            <span className="rate" style={{ backgroundColor: `${rate_color}` }}>
              {rate}
            </span>
            {ratings}
          </p>
          <p className="amount">
            Form <span>{form_amount_range}</span>
          </p>
          <p>{nature}</p>
        </div>
        <div className="place-owner-details">
          <img src={c_image} alt="profile picture" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos corporis libero eveniet minus,
          </p>
        </div>
        <div className="explore-footer">
          <a href="#">{`${status} Now`}</a>
          <div>
            <img src={Location} alt="location icon" />
            <img src={Upload} alt="upload icon" />
            <img src={Like} alt="like icon" />
          </div>
        </div>
        <div className="pops">
          <p>{rate_status}</p>
          <div>
            <img src="./../assets/flaticons/heart.png" alt="cross thingy" />
            <img src="./../assets/flaticons/gps.png" alt="bookmark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
