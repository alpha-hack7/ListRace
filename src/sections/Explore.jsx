import explore_places from "./../data/explore_places";
import C6 from "./../assets/images/explore/person.png";

// general
import Like from "./../assets/flaticons/heart.png";
import GPS from "./../assets/flaticons/gps.png";
import Location from "./../assets/flaticons/location.png";
import Upload from "./../assets/flaticons/upload.png";
const Explore = () => {
  return (
    <section className="explore" id="explore">
      <h2>explore</h2>
      <p>Explore New place, food, culture around the world and many more</p>
      <div className="explore-places">
        {explore_places.map((place) => (
          <Place
            key={place.id}
            b_image={place.b_image}
            c_image={C6}
            b_alt={place.b_alt}
            rate={place.rate}
            rate_color={place.rate_color}
            ratings={place.ratings}
            form_amount_range={place.form_amount_range}
            nature={place.nature}
            status={place.status}
            rate_status={place.rate_status}
          />
        ))}
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
            <img src={Like} alt="cross thingy" />
            <img src={GPS} alt="bookmark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
