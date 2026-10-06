import Location from "./../assets/flaticons/gps.png";
import List from "./../assets/flaticons/list-symbol-of-three-items-with-dots.png";
import Search from "./../assets/flaticons/magnifying-glass.png";
import topics from "./../data/topics";
const Topic = ({ image, title, listings }) => {
  return (
    <div className="topic">
      <img src={image} alt={title} />
      <p>
        <b>{title}</b>
      </p>
      <p>{listings} listings</p>
    </div>
  );
};

const Wallpaper = () => {
  return (
    <section id="home" className="home">
      <div className="wallpaper">
        <div className="wallpaper-content">
          <h2>
            best place to find and explore <br />
            all that you need
          </h2>
          <p>
            Find Best Place, Restaurant, Hotel, Real Estate and many more in
            just One click
          </p>
          <div className="form-area">
            <form className="home-form" action="">
              <div className="inputs">
                <div className="category">
                  <label htmlFor="category">What?</label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Ex: Palce, Resturent, Food, Automobile"
                  />
                  <img src={List} alt="list with three dots" />
                </div>
                <div className="location">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Ex: London, NewYork, Rome"
                  />
                  <img src={Location} alt="address icon" />
                </div>
              </div>
            </form>
            <button className="search-button">
              Search
              <img src={Search} alt="search icon" />
            </button>
          </div>
        </div>
        <div className="all-topics-container">
          <div className="topics">
            {topics.map((topic) => (
              <Topic
                key={topic.id}
                image={topic.image}
                title={topic.title}
                listings={topic.listings}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallpaper;
